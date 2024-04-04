function createAccount(addPin, amount=0) {
    let pin = addPin;
    let balance = amount;

    return {
        checkBalance(insertedPin) {
            console.log(balance)
            if (pin === insertedPin) {
                return `$${balance}`;
            } else {
                return 'Invalid PIN.'
            }
        },

        deposit(insertedPin, deposit) {
            if (pin === insertedPin) {
                balance += deposit;
                return `Succesfully deposited $${deposit}. Current balance: $${balance}.`;
            } else {
                return 'Invalid PIN.'
            }
        },

        withdraw(insertedPin, withdrawal) {
            if (pin === insertedPin && withdrawal < balance) {
                balance -= withdrawal;
                return `Succesfully withdrew $${withdrawal}. Current balance: $${balance}.`;
            } else if (pin === insertedPin && balance < withdrawal) {
                return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
            } else {
                return 'Invalid PIN.'
            }
        },

        changePin(oldPin, newPin) {
            if (pin === oldPin) {
                pin = newPin;
                return `PIN successfully changed!`;
            } else {
                return 'Invalid PIN.'
            }
        },
    }
}

module.exports = { createAccount };

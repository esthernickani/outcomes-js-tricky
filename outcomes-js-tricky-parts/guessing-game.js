function guessingGame() {
    let randomNum = Math.floor(Math.random() * 100)
    let countOfGuess = 0;
    let gameOver = false
    return function guess(num) {
        if (gameOver === true) {
            return 'The game is over, you already won!'
        }

        if (num < randomNum) {
            countOfGuess ++;
            return `${num} is too low!`
        } else if (num > randomNum) {
            countOfGuess ++;
            return `${num} is too high!`
        } else if (num === randomNum) {
            gameOver = true;
            countOfGuess ++;
            return `You win! You found ${num} in ${countOfGuess} guesses.`
        }
    }
}

module.exports = { guessingGame };

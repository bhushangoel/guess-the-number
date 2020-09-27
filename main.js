const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let randomNumber = generateRandomNumber();
let numberOfGuesses = 1;
let resetButton;

function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}

// event handler for click event
function checkGuess() {
    // just to make sure the value is definitely a number.
    let userGuess = Number(guessField.value);
    if (numberOfGuesses === 1) {

    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (numberOfGuesses === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';

        if (userGuess < randomNumber) {
            lastResult.textContent = 'Last guess was too low!';
        } else {
            lastResult.textContent = 'Last guess was too high!';
        }
    }

    numberOfGuesses++;
    guessField.value = '';
    guessField.focus();
}

function setGameOver() {
    guessSubmit.disabled = true;
    guessField.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new Game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    numberOfGuesses = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.textContent = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = generateRandomNumber();
}

// EVENT
// event listener
guessSubmit.addEventListener('click', checkGuess);

let randomNumber =Math.floor(Math.random() * 100)+1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.LowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess( ){
    let userGuess= Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + '';

    if (userGuess === randomNumber) {
       lastResult.textContent = 'Congratulations! You got it!';
       lastResult.style.backgroundColor = 'green';
       lowOrHi.textContent = '';
       // setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'Game Over';
    
    } else {
        lastResult.textContent = 'Wrong'
        lastResult.style.backgroundColor = 'red';
        if (userGuess<randomNumber) {
            lowOrHi.textContent='Guess too low...';
        } else 
        lowOrHi.textContent='Guess too high...';


    }
    guessCount ++;
    guessField.value='';
    guessField.focus();

}


guessSubmit.addEventListener('click', checkGuess)


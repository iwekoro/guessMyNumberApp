'use strict';
/*
// Initial Code

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;

const message = document.querySelector('.message');
// console.log(secretNumber);

// Function
function gameLogic() {
  const guess = Number(document.querySelector('.guess').value);
  //   When there is no input
  if (!guess) {
    message.textContent = '🏮 No Number';
  }
  //   When the guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '🥇 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You lost the game';
      score = 0;
    }
    // When the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '🥈 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You lost the game';
      score = 0;
    }
    // when the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    message.textContent = '🏆 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //   console.log(typeof guess, typeof secretNumber);
}

let check = document.querySelector('.check');
check.addEventListener('click', gameLogic);

function resetGame() {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  message.textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //   console.log(secretNumber);
}

const again = document.querySelector('.again');
again.addEventListener('click', resetGame);

//End of Initial code
*/

/*
//Refactored Code

let secretNumber = generateRandomNumber();
let score = 20;
let highScore = 0;

const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const numberDisplay = document.querySelector('.number');
const body = document.querySelector('body');
const guessInput = document.querySelector('.guess');
const highScoreDisplay = document.querySelector('.highscore');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

// Function to generate a random number between 1 and 20
function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

// Function to display a message
function displayMessage(msg) {
  message.textContent = msg;
}

// Function to handle the game logic
function gameLogic() {
  const guess = Number(guessInput.value);

  if (!guess) {
    displayMessage('🏮 No Number');
  } else if (guess !== secretNumber) {
    handleWrongGuess(guess);
  } else {
    handleCorrectGuess();
  }
}

// Function to handle wrong guesses
function handleWrongGuess(guess) {
  if (score > 1) {
    displayMessage(guess > secretNumber ? '🥇 Too High!' : '🥈 Too Low!');
    score--;
    scoreDisplay.textContent = score;
  } else {
    displayMessage('You lost the game');
    scoreDisplay.textContent = 0;
  }
}

// Function to handle the correct guess
function handleCorrectGuess() {
  numberDisplay.textContent = secretNumber;
  displayMessage('🏆 Correct Number');
  body.style.backgroundColor = '#60b347';
  numberDisplay.style.width = '30rem';

  if (score > highScore) {
    highScore = score;
    highScoreDisplay.textContent = highScore;
  }
}

// Function to reset the game
function resetGame() {
  secretNumber = generateRandomNumber();
  score = 20;

  body.style.backgroundColor = '#222';
  numberDisplay.style.width = '15rem';
  displayMessage('Start guessing...');
  scoreDisplay.textContent = score;
  numberDisplay.textContent = '?';
  guessInput.value = '';
}

// Event listeners
checkButton.addEventListener('click', gameLogic);
againButton.addEventListener('click', resetGame);
// End of refactored code
*/

// Improved Version with number range

let secretNumber = generateRandomNumber();
let score = 20;
let highScore = 0;

const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const numberDisplay = document.querySelector('.number');
const body = document.querySelector('body');
const guessInput = document.querySelector('.guess');
const highScoreDisplay = document.querySelector('.highscore');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

// Function to generate a random number between 1 and 20
function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

// Function to display a message
function displayMessage(msg) {
  message.textContent = msg;
}

// Function to handle the game logic
function gameLogic() {
  const guess = Number(guessInput.value);

  // Check if the input is within the valid range (1 to 20)
  if (!guess && guess !== 0) {
    displayMessage('🏮 No Number');
  } else if (guess < 1 || guess > 20) {
    displayMessage('⚠️ Please enter a number between 1 and 20');
  } else if (guess !== secretNumber) {
    handleWrongGuess(guess);
  } else {
    handleCorrectGuess();
  }
}

// Function to handle wrong guesses
function handleWrongGuess(guess) {
  if (score > 1) {
    displayMessage(guess > secretNumber ? '🥇 Too High!' : '🥈 Too Low!');
    score--;
    scoreDisplay.textContent = score;
  } else {
    displayMessage('You lost the game');
    scoreDisplay.textContent = 0;
  }
}

// Function to handle the correct guess
function handleCorrectGuess() {
  numberDisplay.textContent = secretNumber;
  displayMessage('🏆 Correct Number');
  body.style.backgroundColor = '#60b347';
  numberDisplay.style.width = '30rem';

  if (score > highScore) {
    highScore = score;
    highScoreDisplay.textContent = highScore;
  }
}

// Function to reset the game
function resetGame() {
  secretNumber = generateRandomNumber();
  score = 20;

  body.style.backgroundColor = '#222';
  numberDisplay.style.width = '15rem';
  displayMessage('Start guessing...');
  scoreDisplay.textContent = score;
  numberDisplay.textContent = '?';
  guessInput.value = '';
}

// Event listeners
checkButton.addEventListener('click', gameLogic);
againButton.addEventListener('click', resetGame);

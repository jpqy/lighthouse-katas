// Guess the number game
let prompt = require("prompt-sync")();

// Make random number between 1-100
const secret = Math.floor(Math.random() * 100 + 1);

// Track number of guesses and array of guessed values
let tries = 0;
let guessed = [];

// Loop through prompt and input until the correct number is guessed
while (true) {
  let answer = prompt("Guess a number (1-100): ");
  answer = parseInt(answer);
  if (isNaN(answer)) {
    console.log("Not a number! Try again!")
  } else if (guessed.includes(answer)) {
    console.log("Already guessed!");
  }
  else if (answer < secret) {
    console.log("Too low!")
    tries++;
    guessed.push(answer);
  } else if (answer > secret) {
    console.log("Too high!");
    tries++;
    guessed.push(answer);
  } else if (answer === secret) {
    tries++;
    console.log("You got it! You took " + tries + " attempts!");
    break;
  }
}; 

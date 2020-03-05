// Function to turn string into a columnar representation if it were made into a square
const squareCode = function(message) {
  let code = '';

  // Remove space from message
  message = message.split(' ');
  message = message.join('');

  // Calculate the square root value rounded up
  const sqrt = Math.ceil(Math.sqrt(message.length));

  // Add letters to code at from position 0, 0+sqrt, 0+sqrt*2..., then space, then 1, 1+sqrt...
  for (let i = 0; i < sqrt; i++) {
    for (let j = i; j < message.length; j += sqrt) {
      code += message[j];
    }
    code += ' ';
  }
  return code;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
let camelCase = function (input) {

  // Split input into array of words using space
  result = input.split(' ');

  // Starting from 2nd word, split each into array of letters, capitalize first letter, and turn back into string
  for (let i = 1; i < result.length; i++) {
    result[i] = result[i].split('');
    result[i][0] = result[i][0].toUpperCase();
    result[i] = result[i].join('');
  }

  // Join array of words into one string
  return result.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
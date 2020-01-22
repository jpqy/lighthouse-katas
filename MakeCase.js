const makeCase = function (input, caseType) {
  // Split sentence into words using space
  let words = input.split(' ');

  // Store the spacer that should be between words, default is single space
  let spacer = ' ';

  // Calls appropriate functions depending on caseType arguments
  if (caseType.includes('camel')) {
    words = makeCamel(words);
    spacer = '';
  }

  if (caseType.includes('pascal')) {
    words = makePascal(words);
    spacer = '';
  }

  if (caseType.includes('snake')) {
    spacer = '_';
  }

  if (caseType.includes('kebab')) {
    spacer = '-';
  }

  if (caseType.includes('title')) {
    words = makePascal(words);
    spacer = ' ';
  }

  if (caseType.includes('vowel')) {
    words = capitalizeVowels(words, false);
  }

  if (caseType.includes('consonant')) {
    words = capitalizeVowels(words, true);
  }

  if (caseType.includes('upper')) {
    words = words.map(word => word.toUpperCase());
  }

  if (caseType.includes('lower')) {
    words = words.map(word => word.toLowerCase());
  }

  // Reconstruct array into a single string using the specified spacer
  return words.join(spacer);
}

// A function to capitalize the first letter of a given word
const capitalizeFirstLetter = function (word) {
  // Split word into array of letters, capitalize first one, lowercase remaining, and merge back
  word = word.split('');
  word[0] = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    word[i] = word[i].toLowerCase();
  }
  return word = word.join('');

}

const makeCamel = function (wordArray) {
  // Make first word lowercase
  wordArray[0] = wordArray[0].toLowerCase();

  // For the remaining words, capitalize first letter of each word
  for (let i = 1; i < wordArray.length; i++) {
    wordArray[i] = capitalizeFirstLetter(wordArray[i]);
  }
  return wordArray;
}

// Capitalize first letter of all the words
const makePascal = function (wordArray) {
  return wordArray.map(word => capitalizeFirstLetter(word));
}

// Function to capitalize all vowels (or consonants if consonant flag is set to true)
const capitalizeVowels = function (wordArray, consonants) {
  const vowels = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];
  
  // Split each word into array of letters
  wordArray.forEach((word, i) => {
    wordArray[i] = wordArray[i].split('');

    // Capitalize letter if it is a vowel and consonant flag is false, or it is not a vowel and
    // consonant flag is true. Otherwise, lowercase the letter.
    wordArray[i].forEach((letter, j) => {
      if (vowels.includes(letter) && !consonants) {
        wordArray[i][j] = letter.toUpperCase();
      } else if (!vowels.includes(letter) && consonants) {
        wordArray[i][j] = letter.toUpperCase();
      } else {
        wordArray[i][j] = letter.toLowerCase();
      }
    });
    wordArray[i] = wordArray[i].join('');
  });
  return wordArray;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
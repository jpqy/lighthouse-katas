let numberOfVowels = function(data) {
  let counter = 0;
  let vowels = ["a", "e", "i", "o", "u"]; // Create vowels array to match for vowels later
  let dataArray = data.split(''); // Split string into array of letters

  // Go through each letter and see if the vowels array has it
  dataArray.forEach(letter => {
    if (vowels.includes(letter)) {
      counter++;
    }
  });
  return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
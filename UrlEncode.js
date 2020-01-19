const urlEncode = function (text) {
  let replacement = "";

  // Go through each character, appending %20 to replacement string if it's a space, or appending character if not
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      replacement += "%20";
    } else {
      replacement += text[i];
    }
  }
  return replacement;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
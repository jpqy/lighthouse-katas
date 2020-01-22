// Function to take key-value pairs from URL and decode them into a dictionary object
const urlDecode = function (text) {
  let paramObject = {};

  // Split string into array of parameters using '&'
  paramArray = text.split('&');
  paramArray.forEach(param => {

    // Split each parameter into a key-value pair using '='
    let keyValuePair = param.split('=');

    // Replace %20 with spaces for all key-values
    keyValuePair=keyValuePair.map(keyValue=>processSpace(keyValue));

    // Add each key-value pair into paramObject to be returned
    paramObject[keyValuePair[0]] = keyValuePair[1];
  });
  return paramObject;
};

// Function to change %20 to a space
const processSpace = function (word) {

  // Split word using %20 and join into single string
  let wordArray = word.split('%20');
  return wordArray.join(' ');
};
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
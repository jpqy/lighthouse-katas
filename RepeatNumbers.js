let repeatNumbers = function (data) {
  let result = "";

  // Go through each datum and repeat first element by number of times specified by second element
  data.forEach((datum, index) => {
    for (let i = 0; i < datum[1]; i++) {
      result += datum[0];
    }

    // Add comma if it's not the last datum
    if (index != data.length-1) {
      result += ", ";
    }
  });
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
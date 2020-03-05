const conditionalSum = function(values, condition) {
  // Assign remainder we'll be looking for from user-specified condition (0 for even, 1 for odd)
  let specifiedRemainder = (condition === "even") ? 0 : 1;

  // Store the sum starting at 0
  let sum = 0;

  // Go through each value, divide by 2 and see if remainder matches above specification
  values.forEach(value => {
    if (value % 2 === specifiedRemainder) {
      sum += value;
    }
  });
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
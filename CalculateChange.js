let calculateChange = function(total, cash) {
  let changeObject = {};

  // Make denominations dictionary with name and values, starting from highest value
  const denominations = [
    { name: 'twentyDollar', value: 2000 },
    { name: 'tenDollar', value: 1000 },
    { name: 'fiveDollar', value: 500 },
    { name: 'twoDollar', value: 200 },
    { name: 'oneDollar', value: 100 },
    { name: 'quarter', value: 25 },
    { name: 'dime', value: 10 },
    { name: 'nickel', value: 5 },
    { name: 'penny', value: 1 }];

  let change = cash - total;
  // Go through each denomination, trying to divide remaining change by the denomation value and rounding down
  // to whole number
  denominations.forEach(denomination => {
    let quotient = Math.floor(change / denomination.value);

    // If quotient is not 0, add denomation and quotient into the "change" object to be returned
    if (quotient > 0) {
      changeObject[denomination.name] = quotient;
      change -= quotient * denomination.value;
    }
  });
  return changeObject;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
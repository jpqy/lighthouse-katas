const multiplicationTable = function (maxValue) {
  table = "";

  // Create two loops for row and column up to max value
  for (let r = 1; r <= maxValue; r++) {
    for (let c = 1; c <= maxValue; c++) {
      // Multiple current row and column and add space
      table += r * c;
      table += " ";
    }

    // Add newline at end of each column
    table += "\n";
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
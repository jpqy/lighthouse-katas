const generateBoard = function (whiteQueen, blackQueen) {
  // Generate 8x8 array of 0's
  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];

  // Set queens to 1
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  return board;
};

const queenThreat = function (board) {
  // Obtain coordinates of the two queens and put into array of coordinates
  let queenPos = [];
  board.forEach((row, r) => {
    row.forEach((column, c) => {
      if (column === 1) {
        queenPos.push([r, c])
      }
    });
  });

  // Check if they are on the same row or column
  if (queenPos[0][0] === queenPos[1][0] || queenPos[0][1] === queenPos[1][1]) {
    return true;
  }

  // Check if they are on same diagonal, case 1: (1,1)&(2,2)&(3,3) i.e (x,y) & (x+z,y+z)
  if (queenPos[0][0] - queenPos[1][0] === queenPos[0][1] - queenPos[1][1]) {
    return true;
  }

  // Check if they are on same diagonal, case 2: (0,7)&(1,6)&(2,5) i.e (x,y)(x+z, y-z)
  if (queenPos[0][0] - queenPos[1][0] === queenPos[1][1] - queenPos[0][1]) {
    return true;
  }
  return false;
};
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

let whiteQueen2 = [0, 0];
let blackQueen2 = [5, 7];
let generatedBoard2 = generateBoard(whiteQueen2, blackQueen2);
console.log(generatedBoard2);
console.log(queenThreat(generatedBoard2));
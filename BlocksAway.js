const blocksAway = function (directions) {

  // Make cardinal directions in an array to manipulate cardinal directions by index
  // i.e. Turning left would be index-1, turning right is index+1 
  const cardinalDirections = ['north', 'east', 'south', 'west']
  let currentCardinalDirection = 0; //We start out facing north
  let currentCoordinates = [0, 0]; // Store current coordinates in x,y format
  let parsedDirections = [];

  // Parse directions into array of [direction, spaces]
  for (let i = 0; i < directions.length; i += 2) {
    parsedDirections.push([directions[i], directions[i + 1]]);
  }

  // Execute each set of directions
  parsedDirections.forEach(direction => {

    // Change current cardinal direction based on turning, using %4 so [4] loops back to [0]
    if (direction[0] === 'left') {
      currentCardinalDirection = (currentCardinalDirection + 3) % 4;
    } else {
      currentCardinalDirection = (currentCardinalDirection + 1) % 4;
    }
    currentCoordinates = move(currentCoordinates, cardinalDirections[currentCardinalDirection], direction[1]);
  });

  // Return current coordinates in an object depending on negative/positive values for x and y
  let summary = {};
  if (currentCoordinates[0] >= 0) {
    summary['east'] = currentCoordinates[0];
  } else {
    summary['west'] = -currentCoordinates[0];
  }

  if (currentCoordinates[1] >= 0) {
    summary['north'] = currentCoordinates[1];
  } else {
    summary['south'] = -currentCoordinates[1];
  }
  return summary;

};

// Function to return new coordinate given current coordinate, direction, and spaces to move
const move = function (coordinates, direction, spaces) {
  let newCoordinates = coordinates;
  switch (direction) {
    case 'north':
      newCoordinates[1] += spaces;
      break;
    case 'east':
      newCoordinates[0] += spaces;
      break;
    case 'south':
      newCoordinates[1] -= spaces;
      break;
    case 'west':
      newCoordinates[0] -= spaces;
      break;
  }
  return newCoordinates;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
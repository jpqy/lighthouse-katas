const instructorWithLongestName = function(instructors) {
  let indexOfLongest = 0; // Keep track of index of instructor with longest name

  // Go through instructors and assign indexOfLongest to current index if current index's name is longer
  instructors.forEach((instructor, index) => {
    if (instructor.name.length > instructors[indexOfLongest]["name"].length) {
      indexOfLongest = index;
    }
  });
  return instructors[indexOfLongest];
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));
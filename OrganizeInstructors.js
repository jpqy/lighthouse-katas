const organizeInstructors = function (instructors) {
  // Make new dictionary with keys as courses and values as array of instructor names
  let courses = {};

  instructors.forEach(instructor => {
    // Make new key for course if it doesn't exist, setting it as empty array
    if (!courses[instructor.course]) {
      courses[instructor.course] = [];
    }

    // Add instructor's name to values array
    courses[instructor.course].push(instructor.name);
  });
  return courses;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));
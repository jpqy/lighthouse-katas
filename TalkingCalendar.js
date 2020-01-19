let talkingCalendar = function (date) {
  // Create array of names of months to parse numerical month
  let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  dateArray = date.split("/");

  // Substitute month for string using the months array (subtract 1 because months start at 1 not 0)
  monthString = monthsArray[Number([dateArray[1]] - 1)];

  // Convert date string into number and add appropriate suffix given 1's digit (use %10 to obtain it)
  let dateNum = Number(dateArray[2]);
  let dateString;
  switch (dateNum % 10) {
    case 1: {
      dateString = dateNum + "st";
      break;
    }
    case 2:{
      dateString = dateNum + "nd";
      break;
    }
    case 3:{
      dateString = dateNum + "rd";
      break;
    }
    default:{
      dateString = dateNum + "th";
    }
  }
  return (monthString + " " + dateString + ", " + dateArray[0]);
};




console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
function daysBetweenDates(date1, date2) {
  //How many milliseconds in a day
  const aDay = 1000 * 60 * 60 * 24;
  //  1000 millSec * 60 sec * 60 min * 24 hrs

  const diff = Math.abs(date1 - date2); // only if negative becomes positive
  //this will return a number in millliseconds

  return Math.floor(diff / aDay); // in order to know days of diff between dates
}
const today = new Date();
const myBirhDay = new Date(1990, 06, 16);
const days = daysBetweenDates(today, myBirhDay);
console.log(days);

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const day = weekday[date.getDay()];
const hrs = hours >= 12 ? `${hours} PM` : `${hours} AM`;

console.log(`Today is :" ${day}`);

console.log(`current time is : ${hrs} :${minutes} : ${seconds}`);

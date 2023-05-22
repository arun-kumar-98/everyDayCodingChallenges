const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = new Date();
const yyyy = date.getFullYear();
const mm = date.getMonth();

const dd = date.getDate();

//==================================
console.log(`${dd}-${monthNames[mm]}-${yyyy}`);
//21-3-2023

console.log(`${dd}-${mm}-${yyyy}`);

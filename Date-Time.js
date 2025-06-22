// Lecture 13 - Date and Times in Javascript


let myDate = new Date();
// console.log(myDate.toString()) // Output: Sat Feb 01 2025 22:57:51 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toDateString()) // Output: Sat Feb 01 2025
// console.log(myDate.toLocaleDateString()); // Output: 2/1/2025
// console.log(myDate.toLocaleString()); // Output: 2/1/2025, 10:59:08 PM

let createDate = new Date(2022, 0, 23, 6, 5);
// let createDate = new Date("2022-05-27");
// let createDate = new Date("05-27-2022");
// console.log(createDate.toDateString()); // Output: Sun Jan 23 2022
// console.log(createDate.toLocaleString()); // Output: 1/23/2022, 6:05:00 AM

let newDate = new Date();
// console.log(newDate.getMonth()+1); // Output: current month to be shown here as 2

newDate.toLocaleString("default", {
  weekday: "short",
  day: "2-digit",
});
// console.log(newDate);

let myHour = new Date().getHours();

if (myHour > 6) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}

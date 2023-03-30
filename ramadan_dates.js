// values.js

const valuesList = [
    "Value 1",
    "Value 2",
    "Value 3",
    "Value 4",
    "Value 5",
    // and so on...
  ];
  
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % valuesList.length;
}, 24 * 60 * 60 * 1000); // 24 hours in milliseconds



// let bangladeshTime = new Date().toLocaleTimeString("en-US", {timeZone:'Asia/Dhaka',timestyle:'full',hourCycle:'h24'});
// console.log(bangladeshTime);
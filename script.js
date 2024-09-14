"use strict";

// if (4 == 5) {
//   console.log("OK");
// } else {
//   console.log("error");
// }

const num = 50;

// if (num < 49) {
//   console.log("error");
// } else if (num > 100) {
//   console.log("to much");
// } else {
//   console.log("OK!");
// }

// num === 50 ? console.log("OK!") : console.log("error");

switch (num) {
  case 49:
    console.log("less");
    break;
  case 100:
    console.log("to much");
    break;
  case 50:
    console.log("Success!");
    break;
  default:
    console.log("sorry");
    break;
}

"use strict";

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

// // *
// // **
// // ***
// // ****
// // *****
// // ******

// let result = "";
// const length = 7;

//

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level ${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) continue first;
//       console.log(`Third level ${k}`);
//     }
//   }
// }
// //1task
// for (let i = 5; i <= 10; i++) {
//   console.log(i);
// }
// //2task
// for (let j = 20; j >= 10; --j) {
//   console.log(j);
//   if (j <= 14) {
//     break;
//   }
// }
//3task
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
//4task
// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// let i = 2;
// do {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// } while (i < 16);
//5task
// const arrayOfNumbers = [];

// for (let i = 5; i <= 10; i++) {
//   arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers);
// return arrayOfNumbers;

//2.1Task
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
// }
// console.log(result);
//2.2Task
// const data = [5, 10, "Shopping", 20, "Homework"];
// for (let i = 0; i < data.length; i++) {
//   if (typeof data[i] === "number") {
//     data[i] = data[i] * 2;
//   } else {
//     data[i] = data[i] + " - done";
//   }
// }
// console.log(data);

//2.3Task
// const data = [5, 10, "Shopping", 20, "Homework"];
// const result = [];
// for (let i = data.length - 1; i >= 0; --i) {
//   result.push(data[i]);
// }
// console.log(result);

//3.1Task
const lines = 5;
let result = "";

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);

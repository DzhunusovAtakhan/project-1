"use strict";
const soldier = {
  health: 400,
  armor: 300,
  sayHello: () => {
    console.log("Hello");
  },
};

const john = Object.create(soldier);
console.log(john);

// const john = {
//   health: 100,
// };

// Object.setPrototypeOf(john, soldier);
john.sayHello();

"use strict";

function createCounter() {
  let counter = 0;

  const myCounter = function () {
    debugger;
    counter = counter + 1;
    debugger;
    return counter;
    debugger;
  };

  return myCounter;
}
debugger;
const increment = createCounter();
debugger;
const c1 = increment();
debugger;
const c2 = increment();
debugger;
const c3 = increment();
debugger;
console.log(c1, c2, c3);

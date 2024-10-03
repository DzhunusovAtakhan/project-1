"use strict";

// function* generator() {
//   yield "S";
//   yield "c";
//   yield "r";
//   yield "i";
//   yield "p";
//   yield "t";
// }

// const res = generator();

// console.log(res.next());
// console.log(res.next());
// console.log(res.next());

function* count(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

for (let k of count(7)) {
  console.log(k);
}

// const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

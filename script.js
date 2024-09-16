//1.1Task
// function sayHello(text) {
//   return `Привет, ${text}`;
// }
// console.log(sayHello("Антон"));

//1.2Task
function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
}
console.log(returnNeighboringNumbers(5));

//1.3Task
function getMathResult(a, b) {
  if (typeof b !== "number" || b <= 0) {
    return a;
  }

  let str = "";

  for (let i = 1; i <= b; i++) {
    if (i === b) {
      str += `${a * i}`;
    } else {
      str += `${a * i}---`;
    }
  }
  return str;
}
console.log(getMathResult(5, 3));

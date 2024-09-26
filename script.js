"use strict";

//filter
// const names = ["Taha", "John", "Annita", "Voldemart"];
// const shortNames = names.filter((name) => {
//   return name.length < 5;
// });
// console.log(shortNames);

//map
// const answers = ["ToDo", "wHiTe", "WILLi"];
// const result = answers.map((item) => item.toLowerCase());
// console.log(result);

//every/some
// const someArr = [5, "qwe", "qertyui"];
// console.log(someArr.some((item) => typeof item === "number"));
// console.log(someArr.every((item) => typeof item === "number"));

//reduce
// const arr = [3, 5, 6, 1, 2, 6];
// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);
// const arr = ["apple", "mango", "banan"];
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

const obj = {
  taha: "person",
  ann: "person",
  dog: "animal",
  cat: "animal",
};

const newArr = Object.entries(obj)
  .filter((item) => item[1] == "person")
  .map((item) => item[0]);
console.log(newArr);

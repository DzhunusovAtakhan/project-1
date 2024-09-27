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

// const obj = {
//   taha: "person",
//   ann: "person",
//   dog: "animal",
//   cat: "animal",
// };

// const newArr = Object.entries(obj)
//   .filter((item) => item[1] == "person")
//   .map((item) => item[0]);
// console.log(newArr);

//1.1Task
const films = [
  {
    name: "Titanic",
    rating: 9,
  },
  {
    name: "Die hard 5",
    rating: 5,
  },
  {
    name: "Matrix",
    rating: 8,
  },
  {
    name: "Some bad film",
    rating: 4,
  },
];

function showGoodFilms(arr) {
  return arr.filter((item) => item.rating >= 8);
}
// console.log(showGoodFilms(films));

//1.2Task
function showListOfFilms(arr) {
  return arr.map((obj) => `${obj.name}`).join(", ");
}
// console.log(showListOfFilms(films));

//1.3Task
function setFilmsIds(arr) {
  return arr.map((film, i) => {
    film.id = i;
    return film;
  });
}

//1.4Task
const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  return arr.every((film) => film.id || film.id === 0);
}
// console.log(checkFilms(tranformedArray));
// checkFilms(tranformedArray);

//2.1Task
const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  return data
    .filter((item) => item.amount > 0)
    .reduce((sum, item) => sum + item.amount, 0);
};
// console.log(getPositiveIncomeAmount(funds));

//2.2Task
const getTotalIncomeAmount = (data) => {
  return data.reduce(
    (sum, item) =>
      data.some((curr) => curr.amount < 0)
        ? sum + item.amount
        : getPositiveIncomeAmount(data),
    0
  );
};
console.log(getTotalIncomeAmount(funds));

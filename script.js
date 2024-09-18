"use strict";

// function copy(mainObj) {
//   const newObj = {};

//   let key;
//   for (key in mainObj) {
//     newObj[key] = mainObj[key];
//   }

//   return newObj;
// }

// const numbers = {
//   a: 1,
//   b: 3,
//   c: {
//     x: 2,
//     y: 5,
//   },
// };

// // const newNumbers = copy(numbers);

// // newNumbers.a = 10;
// // newNumbers.c.a = 30;

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//   d: 17,
//   e: 20,
// };

// console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArr = ["a", "b", "c"];
// const newArr = oldArr.slice();

// newArr[1] = "ldfnl";

// console.log(oldArr);
// console.log(newArr);

// const videos = ["youtube", "vimeo", "rutube"],
//   blogs = ["skl", "journal", "blogger"],
//   internet = [...videos, ...blogs, "vk", "facebook"];

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];
// log(...num);

// const q = {
//   one: 1,
//   two: 2,
// };

// newObject = { ...q };

//TASK object
const personalPlanPeter = {
  name: "Peter",
  age: "27",
  skills: {
    languages: ["ru", "eng", "kgz"],
    programmingLangs: {
      js: "20%",
      php: "10%",
      rubi: "30%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (obj) {
    let langs = "";
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        for (let i in obj[key]) {
          if (i === "languages") {
            for (let j in obj[key][i]) {
              langs = obj[key][i].join(" ");
              return `Мне ${
                obj.age
              } и я владею языками: ${langs.toUpperCase()}`;
            }
          }
        }
      }
    }
  },
};

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

//1.1Task
function showExperience(plan) {
  for (let key in plan) {
    if (typeof plan[key] === "object") {
      for (let i in plan[key]) {
        if (i === "exp") {
          return plan[key][i];
        }
      }
    }
  }
}
// showExperience(personalPlanPeter);
// console.log(showExperience(personalPlanPeter));

// console.log(personalPlanPeter);

//1.2Task
function showProgrammingLangs(plan) {
  let langName = "";
  let langLevel = "";
  let result = "";

  for (let key in plan) {
    if (typeof plan[key] === "object") {
      for (let i in plan[key]) {
        if (i === "programmingLangs") {
          for (let j in plan[key][i]) {
            langName = j;
            langLevel = plan[key][i][j];
            result += `Язык ${langName} изучен на ${langLevel}\n`;
          }
        }
      }
    }
  }
  return result;
}
// console.log(showProgrammingLangs(personalPlanPeter));

//1.3Task
// смотри метод-функцию в обьекте

//2.1Task
const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  let familyNames = "";
  const familyArr = [...arr];

  for (let key of arr) {
    familyNames += `${key} `;
  }
  if (familyArr.length === 0) {
    return "Семья пуста";
  }

  return `Семья состоит из:${familyNames}`;
}
// console.log(showFamily(family));

//2.2Task
const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  for (let keys of arr) {
    console.log(keys.toLowerCase());
  }
}
// standardizeStrings(favoriteCities);

//3.1Task
const someString = "This is some strange string";

function reverse(str) {
  if (typeof str !== "string") {
    return "Ошибка!";
  }
  return str.split("").reverse().join("");
}
console.log(reverse(someString));

//3.2Task
const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

const allCurr = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
  let result = "";
  if (arr.length === 0) {
    return "Нет доступных валют";
  }

  arr.forEach((item) => {
    if (item === missingCurr) {
      arr = arr.filter((curr) => curr !== missingCurr);
    }
  });
  for (let key of arr) {
    result += `${key}\n`;
  }
  return `Доступные валюты:\n${result}`;
}
console.log(availableCurr([], "USD"));
// availableCurr(allCurr, "CNY");

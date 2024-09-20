"use strict";

//Task1.1
const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

const shoppingMallData2 = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
    {
      width: 8,
      length: 10,
    },
    {
      width: 8,
      length: 10,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 4,
  moneyPer1m3: 45,
  budget: 790000,
};

function isBudgetEnough(data) {
  let mallWidth = 0;
  let mallLength = 0;
  for (let key in data.shops) {
    for (let i in data.shops[key]) {
      if (i === "width") {
        mallWidth += data.shops[key][i];
      } else if (i === "length") {
        mallLength += data.shops[key][i];
      }
    }
  }
  const totalShopSqr = mallLength * mallWidth;
  const mallVolume = totalShopSqr * data.height;

  const totalHeatingCoast = mallVolume * data.moneyPer1m3;
  console.log(data.budget - totalHeatingCoast);
  if (data.budget - totalHeatingCoast >= 0) {
    return "Бюджета достаточно";
  } else {
    return "Бюджета не достаточно";
  }
}

// isBudgetEnough(shoppingMallData);
// console.log(isBudgetEnough(shoppingMallData2));

//2.1Task
const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
  "Alex",
];

function sortStudentsByGroups(arr) {
  arr.sort();
  const groupArr = [];
  let remStud;

  for (let i = 0; i < arr.length; i += 3) {
    const group = arr.slice(i, i + 3);
    groupArr.push(group);
  }

  if (groupArr[groupArr.length - 1].length < 3) {
    remStud = groupArr.pop().join(", ");
  } else {
    remStud = "-";
  }
  const result = [...groupArr, "Оставшиеся студенты : " + remStud];
  return result;
}
// sortStudentsByGroups(students);
console.log(sortStudentsByGroups(students));

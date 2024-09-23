// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// pow(2, 2);

const students = {
  js: [
    {
      name: "John",
      progress: 100,
    },
    {
      name: "Ivan",
      progress: 60,
    },
  ],
  html: {
    basic: [
      {
        name: "Peter",
        progress: 20,
      },
      {
        name: "Ann",
        progress: 18,
      },
    ],
    pro: [
      {
        name: "Sam",
        progress: 10,
      },
    ],
  },
};

function getTotalProgressByIteration(data) {
  let progress = 0;
  let students = 0;

  for (let course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;

      for (let i = 0; i < course.length; i++) {
        progress += course[i].progress;
      }
    } else {
      for (let subCourse of Object.values(course)) {
        students += subCourse.length;

        for (let i = 0; i < subCourse.length; i++) {
          progress += subCourse[i].progress;
        }
      }
    }
  }

  return progress / students;
}

// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }

    return [total, data.length];
  } else {
    let total = [0, 0];

    for (let subData of Object.values(data)) {
      const subDataArr = getTotalProgressByRecursion(subData);
      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }

    return total;
  }
}

const result = getTotalProgressByRecursion(students);

// console.log(result[0] / result[1]);

//1.1 Task
function factorial(n) {
  let result = 1;

  if (n <= 0) {
    return 1;
  } else if (!Number.isInteger(n) || typeof n === "string") {
    return "Введены некорректные значения";
  } else {
    for (let i = 0; i < n; i++) {
      result *= n - i;
    }
  }

  return result;
}
console.log(factorial(5));
// factorial(5);

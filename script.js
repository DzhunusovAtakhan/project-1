let numberOfFilms;

function start() {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");
    if (a != null && b != null && (a != "") & (b != "") && a.length < 50) {
      personalMovieDB.movies[a] = b;
    }
  }
}
// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка!");
  }
}
// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
// showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
// writeYourGenres();

//1.1Task
function calculateVolumeAndArea(leng) {
  if (typeof leng !== "number" || leng < 0 || !Number.isInteger(leng)) {
    return "При вычислении произошла ошибка";
  }

  return `Объем куба: ${leng * leng * leng}, площадь всей поверхности: ${
    6 * (leng * leng)
  }`;
}
// console.log(calculateVolumeAndArea(5));

function calculateVolumeAndArea(length) {
  if (typeof length !== "number" || length < 0 || !Number.isInteger(length)) {
    return "При вычислении произошла ошибка";
  }

  let volume = 0,
    area = 0;
  volume = length * length * length;
  area = 6 * (length * length);
  return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

// console.log(calculateVolumeAndArea("5"));

//1.2Task
function getCoupeNumber(ticket) {
  if (typeof ticket !== "number" || ticket < 0 || !Number.isInteger(ticket)) {
    return "Ошибка. Проверьте правильность введенного номера места";
  }
  if (ticket === 0 || ticket > 36) {
    return "Таких мест в вагоне не существует";
  }
  return Math.ceil(ticket / 4);
}
// console.log(getCoupeNumber(45.13));

//2.1Task
function getTimeFromMinutes(minutesSum) {
  if (
    typeof minutesSum !== "number" ||
    minutesSum < 0 ||
    !Number.isInteger(minutesSum)
  ) {
    return "Ошибка, проверьте данные";
  }

  if (minutesSum <= 600) {
    let hour = 0;
    let minute = 0;
    let hourWord = "";

    hour = Math.floor(minutesSum / 60);
    minute = minutesSum % 60;
    if (Math.round(hour) === 1) {
      hourWord = "час";
    } else if (Math.round(hour) > 1 && Math.round(hour) <= 4) {
      hourWord = "часа";
    } else {
      hourWord = "часов";
    }
    return `Это ${Math.round(hour)} ${hourWord} и ${Math.round(minute)} минут`;
  } else {
    return "Слишком большое кол-во минут";
  }
}
// console.log(getTimeFromMinutes(100));

//2.2Task
function findMaxNumber(a, b, c, d) {
  const arr = [a, b, c, d];

  for (let i = 0; i < 4; i++) {
    if (arr[i] === undefined || typeof arr[i] !== "number") {
      return 0;
    }
  }

  return Math.max.apply(null, arr);
}
// console.log(findMaxNumber(2, 14.35, 5));
// findMaxNumber(20, 14, 5);
//3.1Task
function fib(num) {
  let arr = [0, 1];
  let newNum;

  if (num === "" || num === 1) {
    return "0";
  }

  if (typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
    return "";
  }
  for (let i = 2; i < num; i++) {
    newNum = arr[i - 1] + arr[i - 2];
    arr.push(newNum);
  }
  return arr.join(" ");
}
console.log(fib(0));

"use strict";
//i
//g
//m
// const res = prompt("Введите ваше имя");
// const sym = /\d/g;
// console.log(res.match(sym));

const str = "My name is R2D2";
// console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\W/gi));

//\D - не числа
//\W - не слова

//\d - цифры
//\w - слова и буквы
//\s - пробелы

// console.log(res.search(sym));
// console.log(res.match(sym));

// const pass = prompt("Password");

// console.log(pass.replace(/./g, "*"));

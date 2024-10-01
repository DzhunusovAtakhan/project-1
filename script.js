"use strict";

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  #surname = "Swon";

  say = () => {
    console.log(
      `Меня зовут ${this.name} ${this.#surname}, мой возраст: ${this._age}`
    );
  };

  get age() {
    return this._age;
  }

  set age(num) {
    if (typeof num === "number" && num > 0 && num < 110) {
      this._age = num;
    } else {
      console.log("Incorrect");
    }
  }
}

const ivan = new User("Ivan", 27);
// console.log(ivan.age);
// ivan.age = 99;
console.log(ivan.surname);

ivan.say();

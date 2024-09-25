"use strict";

function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum());
}
// showThis(4, 5);

const obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this);
  },
};
// obj.sum();

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}
const ivan = new User("Ivan", 28);

function sayName(surename) {
  console.log(this);
  console.log(this.name + " " + surename);
}

const user = {
  name: "John",
};

// sayName.call(user, "Smith");
// sayName.apply(user, ["Smith"]);

function count(num) {
  return this * num;
}
const double = count.bind(2);
// console.log(double(4));

//1 Обычная функия this - window, но если use strict - undefined
//2 Контекст у методов обьекта - сам обьект
//3 this в конструкторах и классах - это новый экземпляр обьекта
//4 Ручная привязка this: call, apply, bind

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  this.style.backgroundColor = "red";
});

const obj1 = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this);
    };
    say();
  },
};

obj1.sayNumber();

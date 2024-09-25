"use strict";

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`text: ${this.text}; BGColor: ${this.bgColor}`);
  }
}

const someDiv = new ColoredRectangleWithText(25, 10, "Hello", "blue");

someDiv.showMyProps();
console.log(someDiv.calcArea());

// const square = new Rectangle(10, 10);
// console.log(square.calcArea());

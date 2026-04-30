"use strict";

let rectangle = {
  width: 0,
  height: 0,
  get area() {
    return this.width * this.height;
  },
  get aspectRatio() {
    return this.width / this.height || 0;
  },
  set aspectRatio(ratio) {
    this.width = this.height * ratio;
  },
};

console.log(rectangle.aspectRatio);

rectangle.width = 5;
rectangle.height = 10;

console.log(rectangle.area);

rectangle.aspectRatio = 53;

console.log(rectangle.aspectRatio);

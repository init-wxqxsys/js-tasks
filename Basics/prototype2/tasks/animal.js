"use strict";

let animal = {
  walk() {
    console.log(this.name + " " + "идет");
  },
};

function Dog() {
  this.name = "Juggy";
}

Dog.prototype = animal;

let dog = new Dog();

dog.walk();

"use strict";

function Employee(name) {
  this.name = name;
}

// 1. Кто-то перезаписал прототип
Employee.prototype.sayHi = function () {
  console.log(`Hi, I'm ${this.name}`);
};

let emp = new Employee("Alice");
let emp2 = new emp.constructor("Bob");

console.log(emp2.name); // undefined (так как constructor теперь — Object)

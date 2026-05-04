Array.prototype.last = function () {
  return this[this.length - 1];
};

let arr = [1, 2, 3];
console.log(arr.last()); // Должно вывести 3

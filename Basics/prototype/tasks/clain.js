let human = {
  isAlive: true,
  breathe() {
    console.log("Дышу...");
  },
};

let person = {
  canTalk: true,
  __proto__: human,
};

let student = {
  isStudying: true,
  __proto__: person,
};

// 1. Установите прототипы с помощью __proto__
// ... ваш код ...

// 2. Проверьте: какие из этих вызовов сработают?
console.log(student.canTalk); // ?
console.log(student.isAlive); // ?
student.breathe(); // ?

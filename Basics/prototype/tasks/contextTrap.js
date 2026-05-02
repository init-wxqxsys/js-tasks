let animal = {
  name: "Animal",
  sayHi() {
    console.log(this.name);
  },
};

let rabbit = {
  __proto__: animal,
  name: "Rabbit",
};

let carrot = {
  __proto__: rabbit,
  // здесь свойства name нет
};

animal.sayHi(); // (1) Animal
rabbit.sayHi(); // (2) Rabbit
carrot.sayHi(); // (3) Rabbit - почему?

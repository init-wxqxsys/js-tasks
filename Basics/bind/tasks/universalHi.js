// Используя частичное применение (каррирование через bind), создай на её основе две новые функции:

// sayHelloTo(name) — всегда говорит "Hello", (нужно зафиксировать первый аргумент).
// sayByeTo(name) — всегда говорит "Bye".

// ЧАСТИЧНОЕ ПРИМЕНЕНИЕ ФУНКЦИИ BIND - КОГДА МЫ ЖЕСТКО ПРИВЯЗЫВАЕМ ФУНКЦИИ ЕЕ АРГУМЕНТЫ

function sayHi(phrase, name) {
  console.log(`${phrase}, ${name}!`);
}

const sayHelloTo = sayHi.bind(null, "Hello");
const sayByeTo = sayHi.bind(null, "Bye");

sayHelloTo("Иван"); // Выведет: Hello, Иван!
sayByeTo("Иван"); // Выведет: Bye, Иван!

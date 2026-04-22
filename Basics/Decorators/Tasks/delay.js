function delay(f, ms) {
  return function (x) {
    setTimeout(() => {
      f(x);
    }, ms);
  };
}

// Проверка:
let f1000 = delay(console.log, 1000);
f1000("Прошла секунда!");

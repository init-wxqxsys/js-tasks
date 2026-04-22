function debounce(f, ms) {
  let timeout;

  return function (str) {
    clearTimeout(timeout);
    timeout = setTimeout(() => f(str), ms);
  };
}

let f = debounce(console.log, 1000);

f("a"); // 1. Запустили таймер на 1000мс
setTimeout(() => f("b"), 200); // 2. Через 200мс (пауза еще не прошла) — сбрасываем "a", запускаем новый таймер
setTimeout(() => f("c"), 500); // 3. Через 500мс (пауза еще не прошла) — сбрасываем "b", запускаем новый таймер

// В итоге в консоли через 1000мс после ПОСЛЕДНЕГО вызова должно появиться только "c"

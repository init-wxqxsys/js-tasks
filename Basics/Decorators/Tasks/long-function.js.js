function longCalculating(x) {
  // представим что тут происходят тяжелые вычисления
  return x ** 2; // обычное возведение в квадрат, но представим, что это тяжелое вычисление
}

function cacheDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      // если такие данные уже закэшированны, то достаем результат вычислений из коллекции
      console.log("Данные из кэша: " + cache.get(x));
    } else {
      // иначе кэшируем результат выполнения функции и возвращаем его
      const result = func(x); // *оооочень долго ждем конца выполнения функции*

      cache.set(x, result); // кэшируем данные

      console.log("Данные не из кэша: " + result);
    }
  };
}

const calc = cacheDecorator(longCalculating);

calc(2);
calc(4);
calc(2);
calc(4);
calc(16);

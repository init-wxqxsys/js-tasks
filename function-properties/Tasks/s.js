let factorial = function calc(n) {
    if (n === 1) return n;

    return calc(n - 1) * n;
};

let copy = factorial;
factorial = null;

try {
    console.log(copy(5)); // Если выведет 120 — задача решена верно
} catch (e) {
    console.log("Ошибка: функция потеряла связь с собой");
}

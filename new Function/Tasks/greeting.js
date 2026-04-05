function createGreeter(phrase) {
    return new Function("name", `console.log("${phrase}, " + name)`);
};

const hello = createGreeter("Hello");

hello("John"); // Вывод: Hello, John
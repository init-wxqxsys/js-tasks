function makeCounter() {
    let count = 0; // доступа из вне нету

    function counter() {
        return count++;
    };

    // Доступ из вне есть
    counter.set = value => count = value;
    counter.descrease = () => --count;

    return counter;
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

counter.descrease();
counter.descrease();
counter.descrease();

console.log(counter());

counter.set(5);

console.log(counter());

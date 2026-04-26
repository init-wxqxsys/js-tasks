const numbers = [45, 2, 89, 12, 7, 103, 24];

console.log(Math.min.apply(null, numbers));
console.log(Math.max.apply(null, numbers));

// ТВОЙ КОД ЗДЕСЬ:
// Используй Math.max и Math.min вместе с .apply, чтобы найти
// экстремальные значения в массиве numbers.

// Раньше (до появления ... spread-оператора) для поиска максимума в массиве использовали Math.max вместе с apply. Нужно решить именно, используя apply а не ...

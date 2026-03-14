const date = new Date("2026-03-12");
const date1970 = new Date(0); // Дата начала 1970 года

// Вывод
console.log(date.toLocaleDateString()); // 12.03.2026
console.log(date.toLocaleDateString("en-US")); // 3/12/2026
console.log(date.toDateString()); // Thu Mar 12 2026
console.log(`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`); // 12.3.2026

// Установка значений
date.setFullYear(date.getFullYear() + 1); 
console.log(date); // 12.03.2027

date.setTime(date.getTime() + 1000 * 60 * 60 * 24);
console.log(date); // 13.03.2027

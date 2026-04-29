"use strict";
const agent = {
  id: "007",
};

Object.defineProperty(agent, "id", {
  writable: false,
  enumerable: false,
  configurable: false,
});

agent.id = "999"; // Ошибка
console.log(Object.keys(agent)); // []
delete agent.id; // Ошибка

// Создай объект agent со свойством id, значение которого равно 007. Настрой его так, чтобы:

// Значение нельзя было изменить.
// Свойство не отображалось при переборе через for..in или Object.keys().
// Свойство нельзя было удалить, а его настройки нельзя было поменять обратно.

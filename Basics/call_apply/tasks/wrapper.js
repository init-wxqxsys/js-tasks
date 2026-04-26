function showStatus(action, time) {
  console.log(`${this.name} сейчас ${action} в ${time}`);
}

const worker = { name: "Иван" };

function logAndCall(fn, context, ...args) {
  console.log(`Вызываю функцию для объекта: ${context.name}`);

  // ТВОЙ КОД ЗДЕСЬ:
  // Как передать в fn контекст и массив args?
  // Подсказка: args — это уже массив.
  fn.apply(context, args);
}

logAndCall(showStatus, worker, "работает", "10:00");

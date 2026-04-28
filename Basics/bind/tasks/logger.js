// Представь, что у тебя есть объект user с данными. И есть внешняя функция logInfo, которая выводит эти данные. Тебе нужно передать эту функцию в чужую библиотеку (функция runTask), но так, чтобы она всегда использовала данные твоего user.
// Условие: Нельзя менять код функции runTask.

const user = {
  name: "Алексей",
  role: "Admin",
};

function logInfo(greeting) {
  console.log(`${greeting}, ${this.name}. Ваша роль: ${this.role}`);
}

function runTask(callback) {
  // Представь, что это чужой код.
  // Он вызывает колбэк без контекста и передает свой аргумент.
  callback("Внимание");
}

// ТВОЙ КОД

let boundLog = logInfo.bind(user);

runTask(boundLog);

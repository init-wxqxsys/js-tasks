// 1. Создаем функцию, которая "кричит" текст N раз
let shout = function innerFunc(text, n) {
  if (n > 0) {
    console.log(text);
    // ОШИБКА ТУТ: она зависит от внешнего имени 'shout'
    innerFunc(text, n - 1); 
  }
};

// 2. Другой программист берет твою функцию
let speaker = shout;

// 3. И удаляет оригинал (или переменная просто перезаписывается)
shout = null;

// 4. БУМ! Ошибка: shout is not a function
try {
  speaker("Привет!", 3); 
} catch (e) {
  console.log("Крах системы: функция потеряла связь с собой!");
}

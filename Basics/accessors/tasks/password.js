// Создайте объект account со свойством _password (по умолчанию null).

// Реализуйте сеттер password, который принимает строку. Если длина строки меньше 8 символов, выводите ошибку через console.error и не сохраняйте значение.
// Реализуйте геттер password, который всегда возвращает строку из звездочек ********, скрывая реальный пароль.
"use strict";

const account = {
  get password() {
    if (this._password) return "*".repeat(this._password.length);
    else return null;
  },

  set password(value) {
    if (value.length < 8) {
      console.error("Пароль должен быть не менее 8 символов!");
      return;
    }

    this._password = value;
  },
};

console.log(account.password);

account.password = "123324234234";

console.log(account.password);

account.password = "123";

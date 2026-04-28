// У нас есть объект «Секундомер». Метод start должен выводить в консоль текущее значение seconds каждую секунду.
"use strict";

let stopwatch = {
  seconds: 0,
  start() {
    setInterval(
      function () {
        this.seconds++;
        console.log(this.seconds);
      }.bind(this),
      1000,
    );
  },
};

stopwatch.start();

"use strict";

function work(a, b) {
  console.log(a + b); // произвольная функция или метод
}

function spy(func) {
  function wrapper(a, b) {
    wrapper.calls.push([a, b]);

    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}

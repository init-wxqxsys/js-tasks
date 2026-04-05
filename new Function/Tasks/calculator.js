function calculate(str) {
  return new Function(`return ${str};`)();
}

console.log(calculate("5 * 5 + 10")); // 35
let human = {
  isAlive: true,
  breathe() {
    console.log("Дышу...");
  },
};

let person = {
  canTalk: true,
  __proto__: human,
};

let student = {
  isStudying: true,
  __proto__: person,
};

for (let key in student) {
  const isOwn = student.hasOwnProperty(key);

  if (isOwn)
    console.log(key + ": " + student[key]);
}

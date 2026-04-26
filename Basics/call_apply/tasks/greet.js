function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const user1 = { name: "Алексей" };
const user2 = { name: "Мария" };

greet.call(user1, "Привет", "!");
greet.apply(user2, ["Добрый день", "..."])

// ТВОЙ КОД ЗДЕСЬ:
// 1. Вызови greet для user1 через .call ("Привет", "!")
// 2. Вызови greet для user2 через .apply ["Добрый день", "..."]

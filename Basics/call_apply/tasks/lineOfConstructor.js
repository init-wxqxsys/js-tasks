function Character(name, hp) {
  this.name = name;
  this.hp = hp;
}

function Warrior(name, hp, weapon) {
  // ТВОЙ КОД ЗДЕСЬ:
  // Вызови Character так, чтобы его `this` указывал
  // на создаваемый объект Warrior.

  Character.call(this, name, hp);

  this.weapon = weapon;
}

const conan = new Warrior("Конан", 150, "Топор");
console.log(conan);
// Ожидаемый результат: { name: 'Конан', hp: 150, weapon: 'Топор' }

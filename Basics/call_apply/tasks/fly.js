const bird = {
  name: "Орел",
  fly(height) {
    console.log(`${this.name} летит на высоте ${height} метров`);
  },
};

const plane = {
  name: "Boeing 747",
};

bird.fly.call(plane, 10000);
bird.fly.apply(plane, [11000]);

// ТВОЙ КОД ЗДЕСЬ:
// 1. Вызови метод fly для plane с помощью call (высота 10000)
// 2. Вызови метод fly для plane с помощью apply (высота 11000)

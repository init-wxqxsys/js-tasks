let point = {
  x: 3,
  y: 7,

  toJSON: function() {
    return `(${this.x}, ${this.y})`;
  }
};

let shape = {
  type: "circle",
  center: point,
  radius: 5
};

const result = JSON.stringify(shape);

console.log(result);

let order = {
  id: 42,
  product: "Клавиатура",
  total: 5900,
  internalCode: "XK-992",
  supplierId: 7
};

const result = JSON.stringify(order, ["id", "product", "total"]);

console.log(result);

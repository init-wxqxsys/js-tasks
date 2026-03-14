let data = {
  id: 1,
  title: "Тест",
  fn: function() {},
  sym: Symbol("x"),
  empty: undefined,
  active: true
};

const jsonData = JSON.stringify(data);

const parsedData = JSON.parse(jsonData);

const keys = Object.keys(parsedData);

console.log(keys);

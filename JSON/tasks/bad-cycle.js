let author = { name: "Толстой" };

let book = {
  title: "Война и мир",
  year: 1869,
  author: author // цикл!
};

author.mainBook = book; // цикл!

const result = JSON.stringify(book, function(key, value) {
    return key === "mainBook" ? undefined : value;
}, 4);

console.log(result);

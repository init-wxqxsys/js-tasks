let json = '{"title":"Мастер и Маргарита","year":1967,"authors":["Булгаков М.А."]}';

const parsedJSON = JSON.parse(json);

const title = parsedJSON.title;
const year = parsedJSON.year;
const firstAuthor = parsedJSON.authors[0];

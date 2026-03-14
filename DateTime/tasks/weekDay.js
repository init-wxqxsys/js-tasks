let date = new Date(2012, 0, 3); // 3 января 2012
console.log(getWeekDay(date)); // должно вывести "ВТ"

function getWeekDay(date) {
    const weeks = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

    return weeks[date.getDay()];
}

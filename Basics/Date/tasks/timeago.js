console.log(timeAgo(new Date(Date.now() - 30 * 1000)));      // "только что"
console.log(timeAgo(new Date(Date.now() - 5 * 60 * 1000)));  // "5 минут назад"
console.log(timeAgo(new Date(Date.now() - 3 * 3600 * 1000))); // "3 часа назад"
console.log(timeAgo(new Date(Date.now() - 5 * 86400 * 1000))); // "5 дней назад"

function timeAgo(dateTime) {
    if (dateTime > Date.now() - 60 * 1000) {
        return "Только что";
    }
    else if (dateTime > Date.now() - 60 * 60 * 1000) {
        return `${Math.floor((Date.now() - dateTime) / 1000 / 60)} минут назад`;
    }
    else if (dateTime > Date.now() - 24 * 60 * 60 * 1000) {
        return `${Math.floor((Date.now() - dateTime) / 1000 / 60 / 60)} часа назад`;
    }
    else 
    {
        return `${Math.floor((Date.now() - dateTime) / 1000 / 60 / 60 / 24)} дней назад`;
    }
}

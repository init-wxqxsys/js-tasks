let stats = {
    username: "admin",
    loginCount: 42,
    rating: 9.8,
    role: "moderator",
    warnings: 0
};

const result = JSON.stringify(stats, function (key, value) {
    return typeof value === "number" ? "[скрыто]" : value;
}, 2);

console.log(result);

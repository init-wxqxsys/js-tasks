let json = '{"name":"Хакатон","createdAt":"2024-09-01T09:00:00.000Z","participants":12}';

const event = JSON.parse(json, function(key, value) {
    return key === "createdAt" ? new Date(value) : value;
});

console.log(event.createdAt.getFullYear());

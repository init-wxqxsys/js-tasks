const user = {id: 1, name: "Alex"}

const userCopy = {...user};

userCopy.name = "Oleg";

console.log(user);
console.log(userCopy);

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return function(value) {
        return a <= value && b >= value;
    }
}

console.log(arr.filter(inBetween(3, 6))); // [3, 4, 5, 6]
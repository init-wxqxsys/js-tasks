"use strict";

console.log(isPowerOfTwo(4));

function isPowerOfTwo(n) {
    if (n === 1) return true;
    else if (n % 2 !== 0) return false;

    return isPowerOfTwo(n / 2);
}

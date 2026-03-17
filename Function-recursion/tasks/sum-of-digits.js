console.log(sumDigits(123));
console.log(sumDigits(9999));
console.log(sumDigits(0));

function sumDigits(n) {
    if (n / 10 === 0)
        return n;

    return sumDigits(Math.floor(n / 10)) + n % 10;
}

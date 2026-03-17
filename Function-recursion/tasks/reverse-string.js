console.log(reverseString("hello"));   // "olleh"
console.log(reverseString("abcde"));   // "edcba"
console.log(reverseString("a"));       // "a"

function reverseString(str) {
    if (str.length === 1)
        return str;

    return reverseString(str.slice(1)) + str[0];
}
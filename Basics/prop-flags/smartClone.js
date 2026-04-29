"use strict"
function smartClone(obj) {
  return Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
}

let source = {};
Object.defineProperty(source, "readOnly", { value: "yes", writable: false });

let copy = smartClone(source);
console.log(Object.getOwnPropertyDescriptor(copy, "readOnly").writable); // false

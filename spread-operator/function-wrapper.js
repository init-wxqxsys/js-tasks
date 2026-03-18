function logAndSum(...args) {
    console.log(`Аргументов передано: ${args.length}`);

    return sum(...args);
}

function sum(...args) {
    if (args.length === 1) 
        return args[0];
    
    return sum(...args.slice(0, -1)) + args.at(-1);
}

console.log(logAndSum(1, 2, 3));

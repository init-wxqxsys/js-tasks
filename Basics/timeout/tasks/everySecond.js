function printNumbersInterval(from, to) {
    const timerId = setInterval(function () {
        if (from === to)
            clearInterval(timerId);

        console.log(from++);
    }, 1000);
}

function printNumbersRecursion(from, to) {
    let timerId = setTimeout(function tick() {
        timerId = setTimeout(tick, 1000);
        
        if (from === to)
            clearTimeout(timerId);

        console.log(from++);

    }, 1000);
}

// printNumbersInterval(1, 5);
printNumbersRecursion(1, 5);

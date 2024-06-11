const sumAll = function(...args) {
    args.sort()
    if (args.length > 2) {
        console.error(`Unexpected number of function arguments to sumAll: ${args}`)
        return "ERROR"
    } else if (args[0] < 0 || args[1] < 0) {
        console.error(`Args may not be < 0`)
        return "ERROR"
    } else if (typeof(args[0]) !== "number" || typeof(args[1]) !== "number") {
        console.error(`Args must be numbers`)
        return "ERROR"
    }

    let total = 0
    for (i=args[0]; i<=args[1]; i++) {
        total += i
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;

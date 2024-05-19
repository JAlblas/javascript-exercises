const sumAll = function (num1, num2) {
    const args = Array.from(arguments);

    function compareNumbers(a, b) {
        return a - b;
    }

    args.sort(compareNumbers);

    console.log(args[0])
    console.log(args[1])

    if (args[0] < 0 || args[1] < 0 || !Number.isInteger(args[0]) || !Number.isInteger(args[1])) {
        return "ERROR";
    }

    let sum = 0;
    for (let index = args[0]; index <= args[1]; index++) {
        sum += index;

    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

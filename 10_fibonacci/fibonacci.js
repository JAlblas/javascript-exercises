const fibonacci = function (n) {
    if (n < 0) {
        return "OOPS";
    }
    if (n == 0) return 0;

    let array = [1, 1];
    for (let index = 2; index < n; index++) {
        array.push(array[index - 2] + array[index - 1]);
    }
    console.log(array);
    return array[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;

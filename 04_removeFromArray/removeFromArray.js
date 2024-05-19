const removeFromArray = function (array, element) {
    const args = Array.from(arguments);

    for (let i = 1; i < args.length; i++) {
        const element = args[i];

        while (array.indexOf(element) != -1) {
            const index = array.indexOf(element);
            array.splice(index, 1);
        }

    }



    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

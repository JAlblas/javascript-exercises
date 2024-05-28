const palindromes = function (str) {
    let strings = str.replace(/[^a-z0-9]/gi, '').toLowerCase().split('');
    let reverse = [...strings].reverse();
    console.log(strings.join(''));
    console.log(reverse.join(''));
    return strings.join('') == reverse.join('');
};

// Do not edit below this line
module.exports = palindromes;

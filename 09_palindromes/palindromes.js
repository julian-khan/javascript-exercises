const palindromes = function (word) {
    
    const stringFormatted = word.toLowerCase().replace(/\W/g, '');
    const forwardArr = stringFormatted.split('');

    const reversedArr = [...forwardArr].reverse();

    for (i = 0; i < forwardArr.length -1; i++) {
        if (forwardArr[i] !== reversedArr[i]) {
            console.log(false);
            return false
        }
    }
    return true
}
    
palindromes('hello');

// Do not edit below this line
module.exports = palindromes;


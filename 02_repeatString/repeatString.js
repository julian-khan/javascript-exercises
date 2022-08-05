const repeatString = function(word, repeatNum) {
    let multipliedString = '';

    if (repeatNum < 0) {
        return 'ERROR';
    }

    for (i = 0; i < repeatNum; i++) {
        multipliedString += word;
    }

    return multipliedString;
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;

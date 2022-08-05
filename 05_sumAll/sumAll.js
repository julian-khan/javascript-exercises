const sumAll = function(int1, int2) {
    
    if (!(Number.isInteger(int1) && Number.isInteger(int2))) {
        return 'ERROR';
    } else if (int1 < 0 || int2 < 0) {
        return 'ERROR';
    }

    summedNumbers = 0;
    for (i = Math.min(int1, int2); i <= Math.max(int1, int2); i++) {
        summedNumbers += i;
    }

    return summedNumbers
};

// Do not edit below this line
module.exports = sumAll;

const fibonacci = function(finalIndex) {
    if (finalIndex < 0) {
        return 'OOPS';
    }

    let arr = [0, 1];

    if (finalIndex == 0) {
        return arr[0]
    } else if (finalIndex == 1) {
        return arr[1]
    }

    if (finalIndex >= 2) {

    for (i = 2; i <= finalIndex; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr.pop();
    }
};

// Do not edit below this line
module.exports = fibonacci;

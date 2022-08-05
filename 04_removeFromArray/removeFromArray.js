const removeFromArray = function(arr, ...removeElements) {
    arrCopy = [...arr];

    for (const removeEl of removeElements) {
        const index = arrCopy.indexOf(removeEl);

        if (index !== -1) {
            arrCopy.splice(index, 1);
        }
    }

    return arrCopy;
};

// Do not edit below this line
module.exports = removeFromArray;

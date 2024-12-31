const removeFromArray = function(a, b, c, d, toRemove) {
    const array = [a, b, c, d];
    const index = array.indexOf(toRemove);
    delete array[index];
};

removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

// Do not edit below this line
module.exports = removeFromArray;

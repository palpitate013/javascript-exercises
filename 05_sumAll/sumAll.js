const sumAll = function(min, max) {
    let range = [];
    for(let i = min; i <= max; i++){
        range.push(i);
    }
    let sum = 0;
    for(let index = 0; index < range.length; index++){
        sum += range[index];
    }
    return sum;
};

sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;

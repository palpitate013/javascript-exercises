const repeatString = function(string, num) {
    let originalString = string
    for (let i = 1; i < num; i++){
        string = string + originalString
    }
    return string
};
repeatString('hey', 3) // returns 'heyheyhey'

// Do not edit below this line
module.exports = repeatString;

const convertToCelsius = function(temp) {
  let celsius = (temp-32)*0.555555556;
  return celsius;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = (temp*1.8)+32;
  return fahrenheit;
};

convertToCelsius(32) // fahrenheit to celsius, should return 0

convertToFahrenheit(0) // celsius to fahrenheit, should return 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

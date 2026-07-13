
const celsiusToFashrenheit = (celsius) => (celsius * 9 / 5) + 32

FashrenheitTocelsius = (Fashrenheit) => (Fashrenheit - 32) * 5 / 9
const formatTemperature = (value, unit) => `${value} ${unit}`


const fahrenheit = celsiusToFashrenheit(25)
console.log(formatTemperature(fahrenheit, "F"));

const celsius = FashrenheitTocelsius(68)
console.log(formatTemperature(celsius, "C"));


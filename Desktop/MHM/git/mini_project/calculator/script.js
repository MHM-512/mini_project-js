const display = document.getElementById('display');
const equalBtn = document.getElementById('equal');
const appendToDisplay = (input) => {
    display.value += input;
};
const clearDisplay = function () {
    display.value = ' ';
};
const calculator = () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
equalBtn.addEventListener('click', function () {
    try {
        if (display.value) {
            display.value = eval(display.value);
        }} catch (err) {
        display.value = "Error";
    }})
const isPositive = (number) => number > 0;
const isNegative = (number) => number < 0;
const isZero = (number) => number = 0;
const isEven = (number) => number = number% 2 === 0;
const describeNumber = (number) => {
    return{
    positivez :isPositive(number) ,
    negative :isNegative(number)  ,
    zero:isZero(number) ,
    even:isEven(number) ,
    odd: isEven(number),
}}

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));

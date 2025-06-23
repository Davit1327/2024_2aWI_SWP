const data2 = "1,2,3,4,5,6,7,8,9,10,11,12";

const numbers = data2.split(',').map(Number);

const evenSum = numbers.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
const oddSum = numbers.filter(n => n % 2 !== 0).reduce((a, b) => a + b, 0);

const result = evenSum / oddSum;

console.log("Ergebnis:", result);

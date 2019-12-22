/*
 Title: Random Element
Total Test Cases: 2


Body:

 Write a JavaScript function to get a random item from an array.

Test Input: 

1. randomElement([10,20,30,40]);

2. randomElement(['a','b','c']);

Output 

1. should return some random element from array 

2. should return some random element from array 

*/

const randomElement=(arr =>arr[Math.floor(Math.random()*arr.length)])

console.log(randomElement([10,20,30,40]))
console.log(randomElement([10,20,30,40]))
console.log(randomElement([10,20,30,40]))
console.log(randomElement([10,20,30,40]))
console.log(randomElement([10,20,30,40]))
console.log(randomElement([10,20,30,40]))
console.log(randomElement(['a','b','c']))
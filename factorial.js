const factorial = n =>  n - 1 > 0 ? n * factorial(n - 1) : n;

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));
console.log(factorial(0));


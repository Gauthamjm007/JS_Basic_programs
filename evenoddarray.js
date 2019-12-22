
/*
Write a function that accepts and array of numbers and returns and array of arrays. The first array in the return array should include all the even numbers from the argument array. The second array in the return array should include all odd numbers.

Examples

    INPUT: evenOdd([1,2,3,4,5,6]);
    OUTPUT: [ [2,4,6], [1,3,5] ]
*/

const evenOdd=(a=> [a.filter(num=>num%2==0),a.filter(num=>num%2==1)])
console.log(evenOdd([1,2,3,4,5,6]))
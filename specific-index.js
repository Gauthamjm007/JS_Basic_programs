/*
Title: Get all array elements except those with specified indexes
Total Test Cases: 2


Body:

Write a function to return all elements of that array, except the ones with the indexes passed in the parameter.

The function should accept either an array or a single integer as parameters, like this:

var array = ['a', 'b', 'c', 'd', 'e'];
var indices = [1,3]
// array2 should contain ['a', 'c', 'e']

or

var array = ['a', 'b', 'c', 'd', 'e'];
var indices2 = [1]
// array2 should contain ['a', 'c', 'd', 'e']
*/

function arrayExpect(a,b){
    for(i=0;i<b.length;i++){
        a.splice(b[i],1)
        b=b.map(ele=>ele-1)
    }
    return a
}

console.log(arrayExpect(['a', 'b', 'c', 'd', 'e'],[1,3]))
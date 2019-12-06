const fruits = ['mango','peach','watermelon','chikoo','apple']
const vegetables = ['carrot','cauliflower','spinach','drumsticks']


//add element to end of the array
console.log(fruits.push('banana'))
console.log(fruits)
console.log(fruits.length)//5

//add an element to the beginning of the array
console.log(fruits.unshift('tomato'))
console.log(fruits)

//remove an element from the end of an array
console.log(fruits.pop())
console.log(fruits)

//remove an element from the beginning of an array
console.log(fruits.shift())
console.log(fruits)

console.log(fruits.indexOf('tomato'))//undefined
console.log(fruits.indexOf('mango'))//0

console.log(fruits.includes('pineapple'))//false
console.log(fruits.includes('apple'))//true

console.log(fruits.slice(0,2))//[]
console.log(fruits.slice(3))//[]

console.log(fruits.join('_'))//array in the form of string
console.log(fruits.reverse())//reverse the array 

console.log(fruits.toString())//check the string in the array 
console.log(fruits.sort())//sort the array from alphabetical order 

//reverse and sort methods change the original array 

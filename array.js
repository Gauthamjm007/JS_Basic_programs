let n1=10
let a1=n1

console.log(n1,a1)//10 10 
n1=30
console.log(n1,a1)//20 10 
a1=20
console.log(n1,a1)//20 30


let num1=[10,20]
let arr1=num1
console.log(num1,arr1)//[ 10, 20 ] [ 10, 20 ]
num1.push(30)
console.log(num1,arr1)//[ 10, 20, 30 ] [ 10, 20, 30 ]
arr1.push(40)
console.log(num1,arr1)//[ 10, 20, 30, 40 ] [ 10, 20, 30, 40 ]

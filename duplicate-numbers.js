/*

arr=[10,20,10,30,40,50]
output arr=[10,20,30,40,50]


*/

let arr = [10, 20, 10, 30, 40, 45, 45, 50]
let uniq = [...new Set(arr)]
const uniqueArray = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
})
console.log(uniq)
console.log(uniqueArray)
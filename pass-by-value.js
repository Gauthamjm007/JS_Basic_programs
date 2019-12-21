//primitives are always pass by values
let n1 = 10

function changeValue(n1) {
    n1 = 20
    return n1

}
console.log(changeValue(n1))
console.log(n1)
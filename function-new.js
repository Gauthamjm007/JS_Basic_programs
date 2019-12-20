let n2=10

function details(){
    let n2=20
    console.log(n2)
    return this
}

console.log(details())//global object
console.log(new details())//{}
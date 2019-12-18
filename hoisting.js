//variables declared with var

console.log(city)//undefined
var city='banglore'
console.log(city)//'banglore

//function declarations get hoisted
console.log(add(10,20))
function add (n1,n2){
    return n1+n2
}

//function expressions do not get hoisted
console.log(total)//undefined
//console.log(total(10,20))//TypeError: total is not a function
var total = function(){
    return n1+n2
}

const total = function(n1,n2){      /*ReferenceError: Cannot access 'total' before initialization*/
    return n1+n2
}
const age =23.4444;
const age1= 25;
let temprature = 24.555555;
console.log(typeof age,typeof temprature,typeof age1)
var numArray=[1,2,3,4]
console.log("Round:"+Math.round(temprature))
console.log("Floor:"+Math.floor(temprature))
console.log("Ceil:"+Math.ceil(temprature))
console.log(age1)
temprature=Math.round(temprature)
console.log("rounded once"+temprature)
temprature=Math.round(temprature)
console.log("rounded twice"+temprature)
console.log("PI value:"+Math.PI)
console.log("Power:"+Math.pow(2.5,3.5))
console.log("Sqrt:"+Math.sqrt(144.5))
console.log("Absolute:"+Math.abs(Number.MIN_VALUE))
console.log("Min:"+Math.min(age1,age))
console.log("Maximum:"+Math.max(age1,temprature))
console.log("Random:"+Math.random());
console.log("is Nan "+Number.isNaN(numArray))
console.log("is Nan "+Number.isNaN(age))

console.log(typeof NaN)
const a =NaN
console.log(Number.isNaN(a))



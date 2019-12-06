const source = 'bangalore'
const destination = 'MYSORE'


console.log(source)//'banglore'
console.log(source[0])//'b'
console.log(source.charAt(1))//'a'
console.log(source[9])//'undefined'
console.log(source[source.length-1])//'e'
console.log(source.length)//9

console.log(source.toUpperCase())//'BANGALORE'
console.log(source)//'banglore'

console.log(destination.toLocaleLowerCase())//'mysore'

//extract parts of string
console.log(source.slice(0,3))//'ban'

const name = 'maHESH'//'Mahesh'
console.log(name[0].toUpperCase()+ name.slice(1).toLocaleLowerCase())//'Mahesh'

const num = '@#$%'
console.log(num.slice(2))//$%
console.log(num.toUpperCase())//@#$%
console.log(typeof(num))//String


const num2 = Infinity
const num3 = -Infinity
const num4 = 'Friday'  
let abc= Number(num4)
console.log(typeof(abc))


let temp = 'celcius'
console.log(temp)

temp=parseFloat(temp)
console.log(temp)


let roomTemp='1e88886'
console.log(typeof roomTemp)//'string'
roomTemp=parseFloat(roomTemp)
console.log(roomTemp)



const speed='60'
const distance='123.89'
console.log(Number(speed))//60
console.log(Number(distance))//123


const num =125
const result='1'+num
console.log(result)//'125'
console.log(typeof result)//'String'

const result2=String(num)
console.log(result2)//'125'
console.log(typeof result2)//'String2'


console.log(typeof(String(NaN+'')))



const str1= 'Hello', str2 = 'world'
console.log(str1)

console.log(Number('5')+2+3)//10

const source = 'banglore',destination ='mysore',distance1=145
//'Distance between banglore and mysore is 145 kms'

console.log('The distance between '+ source+" and "+destination+' is '+(distance1+10)+' kms.')


console.log('5'+5)//55
console.log(5+'5'+3)//523
console.log('5'+(2+3))//55
console.log(5+3+'3'+2)//832
console.log(typeof([]+''))//string
function abc(){
    return 0;
}
console.log(typeof(abc()+''))

const a1= '15'

//equality check 
console.log(a1==15)// true

//strict equality check
console.log(a1 === 15) //false

console.log(Number(a1)==15)//true

const b1 ='Nan'
console.log(b1==NaN)// false
console.log(b1 === NaN) //false
console.log(String(b1)==NaN)//false

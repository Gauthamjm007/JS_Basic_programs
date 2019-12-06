
function Formatter(str) {

    return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6)}`

}


console.log(Formatter('1234567890'))//'(123) 456-7890'
console.log(Formatter('1234512345'))//'(123) 451-2345'




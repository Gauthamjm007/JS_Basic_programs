function divideString(a, b) {

     if(b==null){
         b=a.length
     }    

    let result = [], x = 0, y = b,  strLength = 0

    if  (a.length==10){
        strLength = (Math.floor(a.length / b)+1)
    }

    else if(a.length % 2 == 0){
        strLength = (Math.floor(a.length / b))
    }
    else {
        strLength = (Math.floor(a.length / b) + 1)
    }

    for (let i = 0; i < strLength; i++) {

        result.push(a.slice(x, y))      
        x += b
        y += b
    }
    return result
}

console.log(divideString('dctacademyisawesome', 5))
console.log(divideString('dcresource', 3))
console.log(divideString('java'))
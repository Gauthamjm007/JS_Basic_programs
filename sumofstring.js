function sumOfDigit(str){
    let sum=0

    for(var i =0;i<str.length;i++){

        
        sum=sum+parseInt(str[i])

    }

    return sum
}


console.log(sumOfDigit('123'))
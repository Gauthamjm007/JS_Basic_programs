function reverseString(str) {
    let result = ''
    for (i = str.length - 1; i > -1; i--) {
        result += str[i]
    }

    if(result==str){
        console.log('palindrome')
    }
    else{
        console.log('not palindrome')
    }
    return result  //return str.split('').reverse().join('') inbuilt method
}

console.log(reverseString('aaaaabbbbbbaaaaa'))
console.log(reverseString('aaaaabbbbbbaaaaaa'))


function reverseString2(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        result = str[i] + result
    }
    return result
}

console.log(reverseString2('dct'))
console.log(reverseString2('banglore'))














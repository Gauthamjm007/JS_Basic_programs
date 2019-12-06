function swapFunction(str) {
    let resultStr = ''
    for (var i = 0; i < str.length; i++) {

        if (str[i] == str[i].toUpperCase()) {
            resultStr += str[i].toLowerCase()
        }
        else {
            resultStr += str[i].toUpperCase()
        }
    }

    return resultStr
}

console.log(swapFunction('DCT Academy'))
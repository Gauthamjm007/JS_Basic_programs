function abbreviation(str) {

    let result = ''
    const words = str.split(' ')
    for (let i = 0; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase()
    }

    return result

}

console.log(abbreviation('virat kholi'))//VK
console.log(abbreviation('mahendra singh dhoni'))//MSD
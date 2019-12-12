const alphabet = 'banglore'
const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 }

function countVowel(str) {
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {

        //if(Object.keys(vowels).includes(str[i]))
        if (vowels.hasOwnProperty(str[i])) {
            vowels[str[i]] += 1
        }
    }

    return vowels

}

console.log(countVowel(alphabet))


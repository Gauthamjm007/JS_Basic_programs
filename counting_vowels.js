function countVowels(str) {
    str = str.toLowerCase()
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            count++
        }
    }

    return count
}

console.log(countVowels('dctacademy'))

function countVowels2(str) {
    let count = 0
    let vowels = 'aeiouAEIOU'
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++
        }
    }
    return count
}

console.log(countVowels2('dctacademy'))


const vowelCount = (str) => ( str.replace(/[^aeiouAEIOU]/gi,"").length )
const vowelCount2 = (str) => (str.match(/[aeiouAEIOU]/gi || []).length)
console.log(vowelCount('aeiouAEIOU'))
console.log(vowelCount2('aeiouAEIOU'))


const city='banglore'
console.log(city.indexOf('a',3))


console.log(city.lastIndexOf('g'))

const phrase = 'javascript is awesome'
console.log(phrase.indexOf('is'))

console.log(city.includes('a'))
console.log(city.includes('x'))

console.log(city.indexOf('x')>=0)//false
console.log(city.indexOf('a')>=0)//true

const languages = 'js,ruby,python,swift'
let newStr=languages.split(',')
console.log(newStr)//[js,ruby,python,swift]
console.log(languages.split(''))//

console.log(languages.search('swift'))
console.log(languages.repeat(1))

console.log(city.substring(1,3))

 
console.log(languages.replace('js','react-js'))


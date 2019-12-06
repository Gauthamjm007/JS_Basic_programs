const str1 = 'Javascipt is awesome'

function HashTagGenerator(str){

    let result = '#'
    const words = str.split(' ')
    for(let i=0;i<words.length;i++){
        result+=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLocaleLowerCase()
    }

    return result


}

console.log(HashTagGenerator(str1))
console.log(HashTagGenerator('make in india'))



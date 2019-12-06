const str1 = 'Javascipt_is_awesome'

function CamelCase(str){

    let result = ''
    const words = str.split('_')
    for(let i=0;i<words.length;i++){
        result+=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLocaleLowerCase()
    }

    return result


}

console.log(CamelCase(str1))
console.log(CamelCase('make_in_india'))
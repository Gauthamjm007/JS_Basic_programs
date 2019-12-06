function string_endsWith(a,b){
    
    let newStr=a.split(' ')
    for(let i=0;i<newStr.length;i++){
        if(newStr[i]==b){
            return true
        }
    }

    return false

}




console.log(string_endsWith('JS PHP PYTHON', 'PYTHON' )) 
console.log(string_endsWith('JS PHP PYTHON', ')' ))
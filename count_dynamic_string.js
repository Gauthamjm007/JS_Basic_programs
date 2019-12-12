let char='virat virat sachin sachin dhoni dhoni dhoni pant 1 10 10'
char=char.split(' ')
console.log(char)
function countString(char){
    const result={}
    for(i=0;i<char.length;i++){
        if(result[char[i]]){
            result[char[i]]+=1
        }
        else{
            result[char[i]]=1
        }
    }
    return result
}

console.log(countString(char))
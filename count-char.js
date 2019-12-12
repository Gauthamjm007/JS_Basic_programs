//char frequency or word frequency


const char = 'dafafafacearaerh'


function countChar(str){

    const result={}
    for(i=0;i<str.length;i++){
        if(result[str[i]]){
            result[str[i]]+=1
        }
        else{
           
            result[str[i]]=1
        }
    }
     return result
}

console.log(countChar(char))
function underToCamel(str,b) {


    let temp= '', newStr='',j=0,temp2


    

    for (i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {

            temp=str.slice(j,i)
            newStr = str.slice(i)   
            newStr=newStr.charAt(0).toLowerCase()+newStr.slice(1)        
            temp2=temp+b+newStr    
            j=i       
        }
    }

    return temp2



}

console.log(underToCamel('dctMern',' '))

function uncamalize(a,b) {

    let temp= '', newStr='',j=0,k=1
    let position=[0]

    for (i = 0; i < a.length; i++) {
        if (a[i] == a[i].toUpperCase()) {          
          position.push(i)                               
        }
    }
    for(i=0;i<position.length;i++){
                     
             newStr = a.slice(position[j],position[k]) 
             j++
             k++  
             newStr=newStr.charAt(0).toLowerCase()+newStr.slice(1) 
             if(i<position.length-1){
              temp+=newStr+b
             }       
             else{
              temp+=newStr
             }                        
    }

    return temp
}

console.log(uncamalize('helloWorldProgram','_'))
console.log(uncamalize('helloWorldProgramSucksToTheCore','_'))
console.log(uncamalize('helloWorld','-'))

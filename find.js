const numbers =[10,20,30,40,50]
console.log(numbers.indexOf(30)>=0) // true
console.log(numbers.includes(30))// true


// find elements based on condition 
//find element greater than 25 if found return the first element or else return undefined
function findEle(a){
 let result
 for(i=0;i<a.length;i++){
     if(a[i]>25){
         result = a[i]
         break
     }
 }
 return result

}

console.log(findEle(numbers))//n or undefined
console.log(findEle([10,20,5,2]))

//js style

function findEleJs(numbers){
    const result = numbers.find(function(ele){
        return ele>25
    })

    return result
    
}

console.log(findEleJs(numbers))//30
console.log(findEleJs([10,20,5,15])) // undefined
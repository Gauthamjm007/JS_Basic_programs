const numbers = [10,20,30,40,50]
const mixedArray=[10,20.55,NaN,Infinity,undefined,'DCT',null]

// c style 
function filterEle(num){
    let arr=[]
    for(i=0;i<num.length;i++){
           if(num[i]>25){
               arr.push(num[i])
           }
    }

    return arr
}

console.log(filterEle(numbers))//[30,40,50]
console.log(filterEle([1,2,3,4]))//[]
console.log(filterEle(mixedArray))//[]

function filterEleJs(num){
    const result=num.filter(function(ele){
        return ele>25
    })
    return result
}

console.log(filterEleJs(numbers))//[30,40,50]
console.log(filterEleJs([1,5,10]))//[]
console.log(filterEleJs(mixedArray))//[]
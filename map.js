const numbers = [10,20,30,40,50]
let x=numbers.map(Math.pow)
console.log(x)

//C style
function addNumber(numbers){
    const result=[]
    for(let i=0;i<numbers.length;i++){
         result.push(numbers[i]+5)
    }

    return result
}

console.log(addNumber(numbers))//[15,25,35,45,55]

//JS style using map() method
function addNumberJs(numbers){
    const result=numbers.map(function(ele){
        return ele+5
    })

    return result
}

console.log(addNumberJs(numbers))//[15,25,35,45,55]
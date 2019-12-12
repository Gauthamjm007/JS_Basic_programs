const person={
    name:'arjun',
    city:'banglore'
}

function obj2Arr(obj){

    const result=[] // initialize a variable result to store the array 
    for(const key in obj){
        result.push([key,obj[key]]) // push every key value pair into an array
    }
    return result   //return the value of the stored array
}

console.log(obj2Arr(person))//[['name','arjun'],['city','banglore']]

console.log(Object.entries(person))//[['name','arjun'],['city','banglore']]
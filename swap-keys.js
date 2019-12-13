const person={
    name:'sachin',
    country:'india'
}


function change(person){
    const result={}
    for(const key in person){
        result[person[key]]=key
    }
   return result
}


console.log(change(person))
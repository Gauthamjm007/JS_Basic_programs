const players = [['firstName','virat'],['city','delhi']]

function arr2Obj(data){
    const result={}
    for(let i=0;i<data.length;i++){
        result[data[i][0]]=data[i][1]
    }
    return result
}

console.log(arr2Obj(players))//

const fruits =['apple','mango','kiwi']
function fruitsObj(fruits){
    const result={}
    for(let i=0;i<fruits.length;i++){
        result[fruits[i]]=fruits[i].length
    }
    return result
}

console.log(fruitsObj(fruits))



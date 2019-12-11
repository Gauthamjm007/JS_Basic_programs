const myZoo = [
    ['King Kong',['gorilla',42]],
    ['Nemo',['fish',5]],
    ['Phil',['groundhog',11]]
]


function zooInventory(myZoo){
    let result=[]
    for(let i=0;i<myZoo.length;i++){
        const str = `${myZoo[i][0]} the ${myZoo[i][1][0]} is ${myZoo[i][1][1]}`
        result.push(str)

    }

    return result
}

console.log(zooInventory(myZoo))



// JS style

function zooInvJS(myZoo){
    const result=myZoo.map(function(ele){
        return `${ele[0]} the ${ele[1][0]} is ${ele[1][1]}`
    })

    return result
}

console.log(zooInvJS(myZoo))
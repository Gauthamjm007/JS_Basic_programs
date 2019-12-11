const array_js=[false, 0 , undefined , '', null,NaN,true ,1,-1,[],[10,20],{},{name:'sachin'},'dct',Infinity]

function filterTruthy(values){
let result=values.filter(function(ele){
    return ele
})

return result
}

console.log(filterTruthy(array_js))





function filterFalsy(values){

    let result=values.filter(function(ele){
        return !ele
    })
    
    return result
}

console.log(filterFalsy(array_js))



function filterValues(values){
    let result=[]
    let truthy=values.filter(function(ele){
        return ele
    })
    let falsy=values.filter(function(ele){
        return !ele
    })
    result.push(truthy,falsy)
    return result
    //return {truthy,falsy}

}
console.log(filterValues(array_js))

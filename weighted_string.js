function weightString(a,b){
    let alpha='.abcdefghijklmnopqrstuvwxyz'
    let result1=0,result2=0
    for(let i=0;i<a.length;i++){
        result1 +=alpha.indexOf(a[i])       
    }
    for(let i=0;i<b.length;i++){
        result2 +=alpha.indexOf(b[i])       
    }

    return result1==result2?true:false

}


console.log(weightString('abc','cba'))
console.log(weightString('bat','ball'))


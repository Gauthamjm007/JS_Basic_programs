const name ='dct'


//for loop (strings and array)
for(let i =0; i<name.length;i++){
    console.log(name[i])
}

//const loop , only on es6(strings and array)
for(const c of name){
    console.log(c)
}


//forEach loop only on array 
name.split('').forEach(function(ele){
    console.log(ele)
})
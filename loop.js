let fruits = ['apple','mango','kiwi']



//for loop
for( let i=0;i<fruits.length;i++){
    
    console.log(fruits[i])
}

//for/of loop -es6
console.log('for of')
for( const c of fruits){
    
    console.log(c)
}

// forEach loop
fruits.forEach(function alpha(a,i,fru){
       
       
       console.log(a,i,fru)//we get the elements
       /*

       output:
       apple 0 apple
       mango 1 mango
       kiwi  2 kiwi
       
       */
      console.log(fru[i].charAt(0).repeat((i+1)*10))
})


//console.log(alpha())
//console.log(alpha('abcd',2,[1,2,3]))




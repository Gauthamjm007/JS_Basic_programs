 //Lexical scoping in JS
 
 /*

Lexical Scope means that in a nested group of functions, 
the inner functions have access to the variables and other 
resources of their parent scope. This means that the child 
functions are lexically bound to the execution context of 
their parents. Lexical scope is sometimes also referred to as Static Scope.*/
 
 let n1= 10 , n2=20
 
 function add(){
     return n1+n2
 }
 console.log(add())
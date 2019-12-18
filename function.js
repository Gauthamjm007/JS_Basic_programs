//function anatomy

//function declaration - 1 way
//function keyword
//add function 
//n1,n2 - parameters of the function
function add(n1,n2){
    //we need to explicitly return a value from the function using the return keyword
    return n1+n2
    //n1+n2 - if no return keyword is used, by default undefined gets resturned from , the function 
}

//add(10,20)--invoking the function , calling the function()
//10,20 - arguments passed to the function
//10 gets assigned to n1,20 gets assigned to n2
console.log(add(10,20))
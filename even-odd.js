/*
create a funciton that can check wheather the argument is an even or odd and print if the number is even or odd
*/

function evenOdd(num){
if(num % 2 === 0)
{   return 'Even';
}

else{
    return 'Odd';
}
}
console.log(evenOdd(-13));

function evenOdd1(x){
    return(x&1)?'odd':'even';
}

console.log(evenOdd1(32));

function evenOdd2(n){
    var a=['even','odd'];  
    
    return a[n%2];
}

console.log(evenOdd2(5));


var evenOdd2 = n => n%2 ==0 ? 'even':'odd';

console.log(evenOdd2(-2));
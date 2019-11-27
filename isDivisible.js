//Write a program isDivisble(a,b,c) to check if a number 'a' is divisible by b and c

function isDivisible(a,b,c){

    if (a%b==0) {
             console.log('The number '+ a + ' is divisible by '+b);
             if(a%c==0){
                 console.log ('and '+c);
             }
             else{
                 console.log('but not divisible by'+c);
             }
    }

    else if (a%c==0){
        console.log('The number '+ a + ' is divisible by'+c+' but not divisible by '+b);                       
    }

    else {
        console.log('The number '+ a + ' is neither divisible by '+c+' or '+b); 
    }


    return 0;
} 

isDivisible(100,10,5);
isDivisible(100,3,7);
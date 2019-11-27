//Fucntion to find simple interest for a sum


function  simpleInterest(p,t,r){

    var interest1=0;
    interest1=(p*t*r)/100;
    var totalAmount=p+interest1;

    console.log('Interest for the sum '+p+'₹​'+' for a duration of ' + t +' years' + ' at the rate of interest of '+r+'%'+' is '+interest1+'₹​');
    console.log('Expected returns are '+ totalAmount+'₹​');

    return 0;

}


simpleInterest(1000,10,10);
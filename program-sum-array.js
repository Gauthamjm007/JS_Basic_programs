/*

Write a funciton to add only the positive numbers in an array

*/

function sumArray(numbers) {

// check if the array is empty | if it is empty return 0 
    if(numbers.length===0){
        return 0;
    }
    else{
    }
    var sum = 0;   //  declare sum as zero

// pass only positive numbers in an array
    for(i=0;i<numbers.length;i++){

        if(numbers[i]>0){

            // add all the positive numbers in an array
            sum=sum+numbers[i];
        }
    }

    return sum; // return sum of all the positive numbers in an array
}

var numbers = [-10,20,-30,40,-50,-100];
console.log(sumArray(numbers));


var emptyarray = [];
console.log(sumArray(emptyarray));

var zeroarray = [0,0,0,0,0,0];
console.log(sumArray(zeroarray));

var negarray = [0,0,0,0,0,0];
console.log(sumArray(negarray));
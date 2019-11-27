
function makeEven(num) {
 
        if(num.length===0){
            return 0;
        }
        else{
        }
        var sum = 0;   
        for(i=0;i<num.length;i++){   
            if(num[i]>0){
                   sum=sum+num[i];
            }
        }   
        var numArray = num;
            numArray = numArray.sort(function (a, b) {  return a - b;  });
        if(sum%2==0){           
            for(var i=-1;i<numArray.length;i++){
                if(numArray[i]%2==0){
                    num.push(numArray[i]);
                    break;   
                }
                else{
                    
                }
            }

        }
        else{

            for(var i=0;i<numArray.length;i++){
                if(numArray[i]%2==0){
                    
                }
                else{
                    num.push(numArray[i]);
                    break;
                }
            }

        }

        return num; 
    }
    
    var numbers = [1,2,3,4,5];
    console.log(makeEven(numbers));
    
    var numbers1 = [1,2,3,4,5,6,7];
    console.log(makeEven(numbers1));

    var emptyarray = [];
    console.log(makeEven(emptyarray));
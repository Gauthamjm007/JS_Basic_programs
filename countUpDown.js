function CountUpDown(a) {

    var a1=[];
    var b=a;
    var c=a;

    if(a==0){
        a1=[0];
    }

    else{
        for(i=0;i<((2*a)+1);i++)
        {      
            if(b !=-1){
                a1.unshift(b);
                b--;

            }

            else{
                
                c--;
                a1.push(c);
                if(c==0){
                    break;
                }
            }
            
        }
    }

    return a1;


}


console.log(CountUpDown(3));
console.log(CountUpDown(0));

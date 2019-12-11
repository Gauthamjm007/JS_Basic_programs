//falsy values in js - false, 0 , undefined , '', null,NaN
//truthy values in js - true ,1,-1,[],[10,20],{},{name:'sachin'},'dct',Infinity
//if(values)

const array_js=[false, 0 , undefined , '', null,NaN,true ,1,-1,[],[10,20],{},{name:'sachin'},'dct',Infinity]


for(const c of array_js){

    if(c){
        console.log('truthy value:',c)
    } 
    else{
        console.log('falsy value:',c)
    }
}
function Strcoun(a,b){

var a1=0;
if(a.length==0){
    a1=0;
}
else{
        for(i=0;i<a.length;i++){
        if(a[i]==b){
            a1++;
        }
    }
}
return a1;
}


console.log(Strcoun('Heooo','o'));
console.log(Strcoun('Heooo','H'));
console.log(Strcoun('','o'));
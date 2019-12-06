function CheckStringOrNot(str){

     if(str.constructor===String){
         return true
     }

     else{
         return false
     }

}

var s=[1,2,3,4]

console.log(CheckStringOrNot(s))
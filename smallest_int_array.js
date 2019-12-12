let arr=[10,20,-30,-40,50,60]
let result=arr[0]
console.log(result)
for(i=0;i<arr.length;i++){
      if(result>arr[i]){
        result=arr[i]
    }
    console.log(result)
      
}

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

  class SmallestIntegerFinder2 {
    findSmallestInt2(args) {
      return args.sort((a,b)=>a-b)[0];
    }
  }
//Property -number
//method - up
const  count ={
    number:0 ,
    up:function(){ //method - inside a method if you want to refer to the current obj, do it via this
        this.number+=1
        return this.number
    },
    down:function(){
        this.number-=1
        return  this.number
    },
    reset:function(){
        this.number=0
        return this.number
    },
    incrementBy:function(n){
        this.number+=n
        return this.number
    },
    decrementBy:function(n){
        this.number-=n
        return this.number
    },
    setTo:function(n){
        this.number=n
        return this.number
    }

}

console.log(count.number)//0
console.log(count['number'])//0

console.log(count.up())// 1
console.log(count.up())//2

console.log(count.down)// [Function: down]
console.log(count.down())// 1
console.log(count.reset())
console.log(count.incrementBy(5))//5
//console.log(count.incrementBy('5'))//55
console.log(count.decrementBy(10))
console.log(count.setTo(5))//5





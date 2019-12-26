let str='This is a string'
let num=100e23
let arr1=[10,20,30,40,50]
let arr2=[60,70,80,90,100]
let _symbol=Symbol(num)
let obj={
    num:123,
    str:'this is a string inside an object',
    fun:(function () {
        return 'This is a function'
    })
}

const minus=(a=>-a)
let _array=[undefined,Math.PI,NaN,null,true,false,Infinity,-Infinity,{},'',this,100,100e1,0,arguments,function add(){return 'this is a function'},minus(-10),String,Boolean,Number,Object,Array,Symbol,BigInt]
console.log(Math.min(null))
for(const c of _array){
    console.log(c,Math.random(0.5))
}


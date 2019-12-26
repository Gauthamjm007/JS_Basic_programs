let str='This is a string'
let num=100e23
let _array=[undefined,Math.PI,NaN,null,true,false,Infinity,-Infinity,{},'',this,100,100e1,0,arguments,function add(){return 'this is a function'},String,Boolean,Number,Object,Array,Symbol,BigInt]
let arr1=[10,20,50,30,40,50]
let arr2=[60,70,80,90,100]
let num2=72934792735979n
let _symbol=Symbol(num)
let obj={
    num:123,
    str:'this is a string inside an object',
    fun:(function () {
        return 'This is a function'
    })
}
console.log(typeof num2)
console.log(Array.isArray(_symbol))

console.log(_array.sort())
console.log(_array)
const tag ={
    sentence: 'I love india',
    generate:function(){
        let newStr=this.sentence.split(' ')
        let result='#'
        for(const c of newStr){
              result+=c.charAt(0).toUpperCase()+c.slice(1).toLowerCase()
        }
        return result
    }
}

console.log(tag.generate('make in india'))//#MakeInIndia
console.log(tag.generate(''))
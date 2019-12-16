const person={
    firstName:'sachin',
    lastName:'tendulkar',
    fullName:function(){
        return this.firstName+' '+this.lastName
    },
    greet:function(){
        return `Hi,My name is ${this.firstName}`
    },
    visitAgain:function(){
        return `Thanks for Visiting ${this.fullName()},Please come again`
    },
    shortName:function(){
        return this.firstName.charAt(0).toUpperCase()+this.lastName.charAt(0).toUpperCase()
    },

    sayHi:function(str){
        return `Hi,${str} my name is ${this.firstName}`
    }
    
}

console.log(person.fullName()) // sachin tendulkar
console.log(person.greet())//Hi my name is sachin
console.log(person.visitAgain())//Thanks for Visiting sachin tendulkar , Please come again
console.log(person.shortName())//ST
console.log(person.sayHi('Gautham'))//Hi,Gautham my name is sachin
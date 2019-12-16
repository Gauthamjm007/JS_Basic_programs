const customer={
    accountNumber:'1001',
    name:'Goutham JM',
    balance:10000,
    transaction:function(amount,code){
        if(code==0){      
            if(amount>this.balance){
                return `The balance is insufficient for the specified withdrawal amount`
            }      
            return `You have withdrawn ${amount} and your current balance is ${this.balance-=amount}`
        }
        else if(code==1){

            return `You have deposited ${amount} and your current balance is ${this.balance+=amount}`
        }
    },

    currentBalance:function(){
        return `The current account balance is ${this.balance}`
    }

}

console.log(customer.currentBalance())
console.log(customer.transaction(1000,0))
console.log(customer.currentBalance())
console.log(customer.transaction(10000,1))
console.log(customer.currentBalance())
console.log(customer.transaction(20000,0))
console.log(customer.currentBalance())
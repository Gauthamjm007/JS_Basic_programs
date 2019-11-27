var shoe = {
    name:'Nike Jordan',
    price:'999$',
    size:[7,8,9,10],
    color:['red','black','white'],
    freeDelivery:true,
    description:'Limited edition - Micheal Jordan Shoes -1997',
    details:{
        asin:'000ABCFEG'
    },
    getDetails:function(){
        return this.name+'\n'+this.price+'\n'+this.size+'\n'+this.color+'\n'+this.freeDelivery+'\n'+this.description+'\n'+this.details.asin;
    }
}

console.log(shoe);
console.log(shoe.price);
console.log(shoe.getDetails());

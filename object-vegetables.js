var cart =[

    {   name:'tomato',
        price: 20,
        quantity:11
    },
    {   name:'brinjal',
        price:30,
        quantity:12
    },
    {    name:'carrot',
         price:22,
         quantity:31  }

];

function CalculateTotal(){
    var sum=0;
    cart.forEach(function(item){     
      sum=sum+(item.price*item.quantity);
    });
    return sum;
}

console.log(CalculateTotal(cart));
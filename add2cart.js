const cart =[
    {   id:1,name:'shoes',quantity:1}
]

function add2Cart(cart,product){
    
    const item=cart.find(function(ele){
        return ele.id==product.id
    })

    if(item){
        item.quantity+=product.quantity
    }
    else{
        cart.push(product)
    }

    return cart
}

console.log(add2Cart(cart,{ id:2,name:'hat',quantity:1}))
console.log(add2Cart(cart,{ id:3,name:'belt',quantity:1}))
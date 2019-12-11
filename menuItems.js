const menuItems = [
    {id:1 ,name:'Gobi machuri' ,  isVeg:true},
    {id:2 ,name:'Chicken 65'   ,  isVeg:false},
    {id:3 ,name:'Panner Dry'   ,  isVeg:true},
    {id:4 ,name:'Chicken Biryani',isVeg:false}

]


//Function to filter veg menu from the MenuItems

function filterVeg(menuItems){
    const result = menuItems.filter(function(ele){
        return ele.isVeg
    })
    return result
}

console.log(filterVeg(menuItems))/*{id:1 ,name:'gobi machuri' ,  isVeg:true}{id:3 ,name:'Panner Dry'   ,  isVeg:true}*/




//Function to filter non-veg menu from the MenuItems

function filterNonVeg(menuItems){
    const result = menuItems.filter(function(ele){
        return !ele.isVeg
    })
    return result
}

console.log(filterNonVeg(menuItems))/*{id:1 ,name:'gobi machuri' ,  isVeg:true}{id:3 ,name:'Panner Dry'   ,  isVeg:true}*/

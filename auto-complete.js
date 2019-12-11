const menuItems = [
    {id:1 ,name:'Gobi machuri' ,  isVeg:true},
    {id:2 ,name:'Chicken 65'   ,  isVeg:false},
    {id:3 ,name:'Panner Dry'   ,  isVeg:true},
    {id:4 ,name:'Chicken Biryani',isVeg:false}

]

function search(menuItems,term){
    const result = menuItems.filter(function(ele){
        //return ele.name.includes(term)
        return !ele.name.indexOf(term)
    })

    return result
}

console.log(search(menuItems,'Chicken'))   // { id: 2, name: 'Chicken 65', isVeg: false } { id: 4, name: 'Chicken Biryani', isVeg: false }
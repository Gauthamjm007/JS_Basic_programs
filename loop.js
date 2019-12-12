const player={
    firstName:'Virat',
    lastName:'Kholi',
    country:'India'
}

console.log(player.firstName)//'Virat'
console.log(player['firstName'])//'Virat'

const prop='firstName'

console.log(player.prop)// undefined
console.log(player[prop])//'Virat' ?? player['firstName]

for(const key in player){
    console.log(key,player[key])
}



/* Output:
firstName Virat
lastName Kholi
country India
*/ 

//forEach on objects
Object.keys(player).forEach(function(key,i,arr){
    console.log(player[key],i,arr)
})



console.log(Object.keys(player).length)


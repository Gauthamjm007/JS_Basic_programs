const fruits = ['mango','apple','watermelon']
console.log(fruits)//[ 'mango', 'apple', 'watermelon' ]
//add elements at a certain index
console.log(fruits.splice(2,0,'kiwi','chikoo'))//returns []
console.log(fruits)//['mango', 'apple', 'kiwi', 'watermelon' ]


//remove player at a certain index
const players = ['sachin','dhoni','virat','shivam']
console.log(players)//['sachin','dhoni','virat','shivam']
console.log(players.splice(2,1,'moni'))//returns [virat]
console.log(players)//['sachin','dhoni','shivam']

const n1=[10,20],n2=[30,40]
console.log(n1+n2)//10,2030,40

//add 2 arrays 
// reuturns a new array
console.log(n1.concat(n2))//[10,20,30,40]
console.log(n1)//[10,20]
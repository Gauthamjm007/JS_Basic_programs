//objects are pass by reference

const fruits = ['apple', 'kiwi']

function changeFruits(fruits) {

    fruits[0] = 'mango'
    return fruits

}

console.log(fruits)
console.log(changeFruits(fruits))
console.log(fruits)

const person = {
    name: 'arjun',
    city: 'shimoga'
}

function changeCity(person) {
    person.city = 'mysore'
    return person
}
console.log(changeCity(person))
console.log(person)
//es5
const person = {
    name: 'Goutham JM',
    city: 'Shimoga'
}

const name = person.name,
    city = person.city

console.log(name, city)

//es6 features  - object destructuring

const article = {
    title: 'JS',
    body: 'Body is awesome'
}

const { title, body } = article
console.log(title, body)
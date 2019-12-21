// short hand properties - concise properties
//es5
var name = 'arjun',
    city = 'banglore'

var person = {
    name: name,
    city: city
}

console.log(person)

//es6 feature - short hand properties
//when property name and variable name is the same, we can use only the variable name
var nameNew = 'Gautham',
    cityNew = 'shimoga'
var personNew = {
    nameNew,
    cityNew
}

console.log(personNew)
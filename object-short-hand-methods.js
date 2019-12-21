//es5

var person = {
    name: 'arjun',
    details: function() {
        return `hi ${this.name}`
    }
}

console.log(person.details())

//es6- short hand methods- concise methods

const student = {
    name: 'ravi',
    details() {
        return `hi ${this.name}`
    }

}
console.log(student.details())
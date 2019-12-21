function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = function() {
        return `${this.firstName} + ${this.lastName}`
    }
    this.getFirstName = function() {
        return this.firstName
    }

}

const p1 = new Person('arjun', 'n')
console.log(p1)

console.log(p1.fullName()) //'arjun n'

//getter method

console.log(p1.getFirstName()) //'arjun'
console.log(p1.firstName()) //arjun
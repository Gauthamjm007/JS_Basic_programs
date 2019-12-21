function Student(obj) {
    this.name = obj.name
    this.gender = obj.gender
    this.course = obj.course
    this.details = function() {
        return this.name + ' - ' + this.gender + ' - ' + this.course
    }

}

const s1 = new Student({ name: 'ravi', gender: 'male', course: 'MERN' })
console.log(s1.course) //MERN
console.log(s1.details())
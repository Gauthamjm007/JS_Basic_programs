//String concetation

function formatTrip() {
    const source = 'bangalore', destination = 'mysore', distance = 145, duration = '3 hours 30 min'

    return 'The distance between ' + source + ' and ' + destination + ' is ' + distance + ' kms ' + 'and the time taken to travel is ' + duration
}
console.log(formatTrip())




// es6 Template
function formatTrip2() {
    const source = 'bangalore', destination = 'mysore', distance = 145, duration = '3 hours 30 min'
    return `The distance between ${source} and ${destination} is ${distance} kms and the time taken to travel is ${duration}`
}
console.log(formatTrip2())

function formatTrip3(){
    const source = 'bangalore', destination = 'mysore', distance = 145, duration = '3 hours 30 min'
    const a='The distance between ' + source + ' and ' + destination + ' is ' + distance + ' kms ' + 'and the time taken to travel is ' + duration
    const b= `The distance between ${source} and ${destination} is ${distance} kms and the time taken to travel is ${duration}`
    return {a,b}
    
}

console.log(formatTrip3())
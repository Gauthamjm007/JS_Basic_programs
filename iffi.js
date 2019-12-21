//IIFE - immediately invoked function expression

(function() {
    console.log('I am IFFI')
}()) //The anonyous function is being called withthin the local scope

//Use case of iifi 

function details(role) {
    var name = 'admin'
    if (role == 'user') {
        (function() {
            var name = 'user'
            console.log(name)
        }())
    }
    console.log('outside if', name)
}

details('user')
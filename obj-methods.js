var person = {
    firstName:'Goutham JM',
    state:'Karnataka',
    gender:'Male'
}

console.log(Object.keys(person));
console.log(Object.values(person));

for(var key in person){
    
       console.log(key,person[key]);

}

console.log(Object.keys(person).includes('firstName'));
console.log(Object.values(person).includes('Pune'));
console.log(Object.values(person).includes('Male'));


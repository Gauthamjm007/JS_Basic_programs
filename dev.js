const developer={
    name:'rakesh',
    skills:['js','py','ruby'],
    details:function(){       
        for(const c of this.skills){
            console.log(`${this.name} knows ${c}`)
        }
        return 0
    }
}

console.log(developer.details())
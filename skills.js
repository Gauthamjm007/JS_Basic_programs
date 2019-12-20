const developer = {
    name:'rakesh',
    skills:['js','rb','py'],
    details: function(){
        this.skills.forEach((skills)=>{
            console.log(this.name)
        })
    }
}

console.log(developer.details())
function Player(name,runs){
    //propersties
    this.name=name
    this.runs=runs
    //methods
    this.avg=function(){
        let total =0
        this.runs.forEach(function(run){
            total+=run
        })

        return (total/this.runs.length).toFixed(2)
    }

    this.details =function (){
        return `${this.name} has played ${this.runs.length} matches`
    }
}


const p1=new Player('sachin',[40,60,50])
console.log(p1)
console.log(p1.name)
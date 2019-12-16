const player={
    name:'virat',
    runs:[40,60,50],
    calcAveg:function(){
        let avg=0
        for(i=0;i<this.runs.length;i++){
            avg+=this.runs[i]
        }
        avg=avg/this.runs.length

        return avg
    }
}

console.log(player.calcAveg())//50
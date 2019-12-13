
let superpowers = [
    {
        name:'Heman',
        power:['strength','agility']

    },
    {   name:'Spider man',
        power:['swing','sense']

    }
]

function  superpower(str,name){

    const result=str.find(function(ele){
        return ele.name==name
    })

    if(result){
        return result.power.join(', ')
    }
    else{
        return 'Super Hero doesnot exist'
    }



}


console.log(superpower(superpowers,'iron'))



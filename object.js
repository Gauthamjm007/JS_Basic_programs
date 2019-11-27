var information  =   {

    name: 'Gautham JM',
    age: '22',
    place:'Shimoga',
    profession:'Engineer',
    details: function(){
        return 'Hi,my name is '+this.name+' ,My age is '+this.age+' ,I live in '+this.place+' ,My profession is '+this.profession;
    }
};

console.log(information.details());
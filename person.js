class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greetings(){
        console.log('My name is '+ this.name+'and my aghe is ');
    }
}
module.exports = Person;
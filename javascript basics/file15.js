//! MORE ABOUT BASICS
/*  
* "EXTENDS" KEYWORD
class Animal{   
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`
    }
 }

 const animal1 = new Animal("tom", 2);
 console.log(animal1) -> Animal {name: 'tom', age: 2}
 console.log(animal1.eat());  -> tom is eating


 if i want another class which have same things as animal
 i will make a dog class:
 class dog{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`
    }
 }
 const tommy = new dog("tommy", 3)
 console.log(dog) -> Animal {name: 'tom', age: 3}
 console.log(dog.eat());  -> tommy is eating

i want more 100 diffrent classes with same things as in animal class
should i copy past the content inside animal class in other class 100 time!!! NO
i will use "extends" keyword by which dog class will have all the properties and methods of animal class without writing them again
means Animal class will be backup for cat class, if any property is not present in cat class, js will search that in animal class
? class cat extends Animal{

}
const tommy = new dog("tommy", 3)
 console.log(dog) -> Animal {name: 'tom', age: 3}
 console.log(dog.eat());  -> tommy is eating



* "SUPER" KEYWORD
lets say cow be another sub class of animal class, but you want another property for the constructor of cow class
you have to write the extra things only which not present in animal class  
class Cow extends Animal{
    constructor(name, age, color){
        super(name, age);   // super keyword will automatically get these key-value pairs form animal
        this.color = color;    // extra key-value pair
        }
        details(){       // extra method
            return `name is ${this.name}`
        }
    }
    const dhara = new Cow("dhara", 20, "white")
    console.log(dhara) -> Cow {name: 'dhara', age: 20, color: 'white'}
    console.log(dhara.eat()) -> dhara is eating



* MEHTOD OVERRIDING
 if any property is found in cow class itdelf then js will not find that property in animal class, and override animal class
class Cow extends Animal{
    constructor(name, age, color){
        super(name, age);   // super keyword will automatically get these key-value pairs form animal
        this.color = color;    // extra key-value pair
        }
        eat(){
            return "modified eat class"
        }
        details(){       // extra method
            return `name is ${this.name}`
        }
    }
    console.log(dhara.eat()) -> modified eat class





















*/


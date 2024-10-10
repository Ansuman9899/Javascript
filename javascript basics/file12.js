//! iterables, array like obj, more about obj, new data structures
/*
* ITERABLES AND ARRAY LIKE OBJECT
ITERABLES: jispe hum for of loop laga sakein
eg: string , array are iterable (obj is not iterable)

const firstName = "Harshit";
for(let char of firstName){
    console.log(char); ->  H,a,r,s,h,i,t
}

const items = ['item1', 'item2', 'item3'];
for(let item of items){
    console.log(item); -> item1,item2,item3
}

ARRAY LIKE OBJ: jinke pas length property hoti hai aur jiko hum index se access kar sakte hai
eg: string

const firstName = "harshit";
console.log(firstName.length); -> 7
console.log(firstName[2]); -> r




* SETS
=>Sets are a collection of unique values(no duplicates allowed) 
=>Sets are iterable and can be used with the for...of loop.
=>Sets are not ordered, Sets are not indexed.
=>sets also have own methods
=>sets are mutable (can be changed)
=>sets works for iterables only

set builder:
?const numbers = new Set([1,2,3,3]);
console.log(numbers) -> Set {1,2,3}  (duplicates removed)

=> //? adding elements to empty set
  ? const numbers = new Set();  (emptyset)
? numbers.add(1);
numbers.add(2);
numbers.add(2);
console.log(numbers) -> Set {1,2}

=> const items = ["item1","item2","item3"];
const numbers = new Set(); 
numbers.add(1);
numbers.add(2);
numbers.add(items);
numbers.add(items);
console.log(numbers) -> Set(3) {1, 2, Array(3)} 
array is added only one time 

=>//? But...
const items = ["item1","item2","item3"];
const numbers = new Set(); 
numbers.add(1);
numbers.add(2);
numbers.add(["item1","item2"]);
numbers.add(["item1","item2"]);
console.log(numbers) -> Set(4) {1, 2, Array(2), Array(2)}
now both are added becuase, both have same element but both are not same array, 
they have different address in the memory
    
=> how to cheak an element is present in the array or not
const numbers = new Set([1,2,3]);
? const cheakone = numbers.has(1);
console.log(cheakone) -> true

=> iteration sets
const numbers = new Set([1,2,3,4,5,6]);
for(let number of numbers){
    console.log(number); -> 1  2  3  4  5  6
}

=> how to get length of sets
const numbers = new Set([1,2,3,4,5,6]);
? console.log(numbers.size) -> 6
(or) 
const numbers = new Set([1,2,3,4,5,6]);
let length = 0;
for(let number of numbers){
    length++;
}
console.log(length) -> 6




* MAPS
=> const person ={
    name: "John",
    age: 7,
    1: "one"
}
in object all the keys are in string only
here the 3rd key "1" is also a string

=> but in map the key can be "anything"!
map builder:
? const person = new Map();
how to add key-value pairs:
? person.set(key,value);
 person.set("name","John");
 person.set("age",7);
 person.set(1,"one")
console.log(person) -> Map(3) {'name' => 'John', 'age' => 7, 1 => 'one'}

how to access keys, values:
values:
? console.log(person.get("name")) -> John
? console.log(person.get(1)) -> one
keys:
? console.log(person.keys()) -> MapIterator {'name', 'age', 1}

for(let key of person.keys()){
    console.log(key, typeof key)
    -> name string
       age string
    ?   1 'number'
}

=> map is iterable
it stores data in oredered fashion
for(let key of person){
   console.log(key)
   -> ['name', 'John']
      ['age', 7]
      [1, 'one']
}
if you want not in array
? for(let [key, value] of person){
    console.log(key, value)
    -> name John
       age 7
       1 one
}

map builder(direct method):
? const person = new map([ ["name","john"], ["age,7"],[1,"one"] ]);


=> const person1 = {
    id:1,
    name:"John"
}
i want to add some more key-value pairs but in another map

const extrainfo = new Map();
? extrainfo.set(person1, {age:8, gender:"male"})  here we take person1(obj) askey and assigned another obj as value havong extra key-value pairs
console.log(extrainfo)
-> Map(1) {Object => Object}
key: {id: 1, name: 'John'}
value: {age: 8, gender: 'male'}

 console.log(person1.id) -> 1
? console.log(extrainfo.get(person1)) -> {age: 8, gender: 'male}
? console.log(extrainfo.get(person1).gender) -> male





* OBJECT CLONING
const obj = {
    key1: "value1",
    key2: "value2"
}

=> const obj2 = obj1 ❌  dont do this becoz both will have sam address
=>const obj2 = {...obj1} ✅  this is called spread operator
=>//? const object = Object.assign({}, object name to clone)
    const obj2 = Object.assign({}, obj) ✅    



* OPTIONAL CHAINING
const user  = {
    firstName: "harshit",
    address: {houseNumber: '1234'}
}
 console.log(user.firstName) -> Harshit
 console.log(user.address) -> {houseNumber: '1234'}
? console.log(user.address.houseNumber) -> 1234

 => in case address prop doesnt exist
 const user  = {
    firstName: "harshit"
}
 console.log(user.address) -> undefined
 but 
 console.log(user.address.houseNumber) -> error
 i dont want any error, rather give me undefined as out put
 
? console.log(user?.address?.houseNumber) -> undefined
this is useful for nested chaining of objects
"?." cheaks first ecist or not, if yes then print that, if no then break the chain and print undefined





* METHODS
methods means function inside objects
=> const person = {
    name: "harshit",
    age: 25,
    about: function(){
        console.log(` person name is ${name}, and age is ${age}`) ❌ -> error
  ?     console.log(` person name is ${this.name}, and age is ${this.age}`) ✅
    }
}
person.about();

=> this keyword is used to refer to the current object in which the function is present or with which the fxn is called
eg: person.about(); here about fxn is inside perosn obj and called with person obj
const person = {
    name: "harshit",
    age: 25,
    about: function(){
 ?      console.log(this); -> {name: 'harshit', age: 25, about: ƒ}
    }
}
person.about();

=> we can also assign same fxn for different objects like this:
? function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
const person1 = {
    firstName : "harsh",
    age: 8,
 ?   about: personInfo
}
const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}
person1.about();
person2.about();
person3.about();

=> "this" keyword doesnt work with arrow functions
in arrow function "this" takes "windows" as obj
const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age); -> Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    }   
}
user1.about(user1);
windows is global object for main js file






*/
























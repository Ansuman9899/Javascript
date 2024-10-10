//!   Intro to objects and accessing objects
/*   //* INTRO
=> to represent real world data array is not sufficient, we need objects
=> objects are collection of key value pairs
=> key is called property and value is called attribute
=> objects are mutable, means we can change them after they are created
=> objects don't have index

* HOW TO CREATE OBJECTS
=> using object literal
?const person = {name:"ansuman", age:18}
console.log(person) -> {name:"ansuman", age:18}
console.log(typeof person) -> object

=> we can also assign an array to a key
const const person = {name:"ansuman", age:18,  hobbies:["reading","swimming"]}


* HOW TO ACCESS AND ADD DATA IN OBJECTS
    const person = {name:"ansuman", age:18}
=> DOT NOTATION
Access
console.log(person.name) -> ansuman
console.log(person.age) -> 18

Add
?objectname.keyname = "valuename";
person.gender = "male"  
console.log(person) -> {name:"ansuman", age:18, gender:"male"}

=> BRACKET NOTATION
Access
console.log(person["name"]) -> ansuman
console.log(person["age"]) -> 18

Add
?objectname["keyname"] = "valuename";
person["gender"] = "male"
console.log(person) -> {name:"ansuman", age:18, gender:"male"}




? use double quotation for keys more than one word
const person = {name:"ansuman", "current age" = 18} 

? if your key is more than 1 word use bracket notation not dot notation
console.log(person.current age:18)❌
console.log(person["current age"])✅




* HOW TO ADD A KEY WHICH IS STORED IN A VARIABLE
? const key = "email" (i want my key name as "email")
const person = {name:"ansuman", age:18, gender:"male"}

person.key = "ansumanpadhy69@gmail.com" ❌
person["key"] = "ansumanpadhy69@gmail.com" ❌
console.log(person) -> {name:"ansuman", age:18, gender:"male", key:"ansumanpadhy69@gmail.com" }
here the problem is it is taking "key" as the keyname, not "email"

to solve it, do this
? person[key] = "ansumanpadhy69@gmail.com" ✅
console.log(person) -> {name:"ansuman", age:18, gender:"male", email:"ansumanpadhy69@gmail.com"}

*/
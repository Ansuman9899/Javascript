//! Object iteration, Computed value and Spread oprator
/*   //* HOW TO ITERATE OBJECT
const person = {name:"ansuman", age:18, gender:"male", email:"ansumanpadhy69@gmail.com"}

1. for-in loop(both key and values)
for( let key in person){
    console.log(key,":", person[key]) -> name:"ansuman"  age:18  gender:"male" email:"ansumanpadhy69@gmail.com" 
}

2.object.keys(only keys) 
const keys = Object.keys(person); (array of keys)
console.log(keys) -> ["name", "age", "gender", "email"]

3. for-of loop(only values)
const values = Object.values(person); (array of values)
console.log(values) -> ["ansuman", 18, "male", "ansumanpadhy69@gmail.com"]





* COMPUTED PROPERTIES
const key1 = "objkey1"
const key2 = "objkey2"

const value1 = "myvalue1"
const value2 = "myvalue2"

i want to use value of key1 and key2 as "keyname" and value of 
value1 and value2 as "valuename"
const obj = { key1: value1, key2: value2 }❌
console.log(obj) -> { key1: myvalue1, key2: myvalue2}
?here value1 and value2 got their "valuename" from respective variable but key1 and key2 don't
?because in object literal we can't use variable as keyname

the solution is the following
const obj = {[key1]: value1, [key2]: value2} ✅
console.log(obj) -> { objkey1: myvalue1, objkey2: myvalue }





* SPREAD OPERATOR
const array1 = [1,2,3]
const array2 = [4,5,6]
=> const newArray = [...array1, array2] (here newArray will have elements of array1 and array2 in whole)
console.log(newArray) -> [1,2,3, array2^] (here array2^ = [4,5,6])

=> const stringArray = [..."Ansuman"]
console.log(stringArray) -> ['A', 'n', 's', 'u', 'm', 'a', 'n']



=>const newobj = {..."Ansuman"}
console.log(newobj) -> {0: 'A', 1: 'n', 2: 's', 3: 'u', 4: 'm', 5: 'a', 6: 'n'}

=> const Obj = {...["item1", "item2"]}
console.log(Obj) -> {0: 'item1', 1: 'item2'} 

=> const obj1 = {key1:"value1", key2:"value2"}
const obj2 = {key3:"value3", key4:"value4"}
const newObj = {...obj1, ...obj2} (here newObj will have all the key of obj1 and obj2)
console.log(newObj) -> {key1: "value1", key2: "value2", key3:"value3", key4:"value4" }


*/















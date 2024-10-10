//! Object Destructuring and Nested Destructuring
/*   //* OBJECT DESTRUCTURING 
const band = {
    bandname:"led zepplin",
    famousSong: "stairway to heaven"
}

storing the values in variables named by their respective keys
const bandname = band.bandname;  (const bandname = "led zepplin")
const famousSong = band.famousSong;   (const famousSong = "stairway to heaven" )
console.log(bandname,famousSong) -> led zepplin stairway to heaven

But we can do this easily using object destructuring 

? const { bandname, famousSong} = band;
here "led zepplin" stored in "bandname" variable
and "stairway to heaven" stored in "famousSong" variable
console.log(bandname,famousSong) -> led zepplin stairway to heaven

=> by default we give the variable name same as the key name
but we can also assign diffrent variable name like this
? let { bandname: var1, famousSong: var2} = band;
 console.log(var1,var2) -> led zepplin stairway to heaven



 => const band = {
 bandname:"led zepplin", 
 famousSong:"stairway to heaven",
 year: 1968,
 Anothersong:"kashmir"
 }

 ? let {bandname, famousSong, ...Restprops} = band;
 here "led zepplin" will be store in "bandname" variable
 "stairway to heaven" will be store in "famousSong" variable
 and the remaining key-value pairs will be stored in a new ojbect name "Restprops"
 console.log(Restprops) -> { year: 1968, Anothersong:"kashmir"}




  * OBJEST INSIDE ARRAY
 const users = [
 { userId:1,name:"john",age:25,},
 { userId:2,name:"jane",age:30,},
 { userId:3,name:"jim",age:35,}
 ]
 ? iterating the array and printing the objects
 for(let user of users){
    console.log(user); 
    -> { userId:1,name:"john",age:25,} { userId:2,name:"jane",age:30,} { userId:3,name:"jim",age:35,}
}

? printing any one property of all objects
for(let user of users){
    console.log(user.name); -> john jane jim
    }

for(let user of users){
    console.log(user.userId); -> 1 2 3
}

? iterating the array and printing the values of the objects
for(let user of users){
    console.log(user.userId,user.name,user.age);
    -> 1 john 25 2 jane 30 3 jim 35
    }




  
   * NESTED DESTRUCTURING
 const users = [
 { userId:1,name:"john",age:25,},
 { userId:2,name:"jane",age:30,},
 { userId:3,name:"jim",age:35,}
 ]
 
=> const [user1,user2,user3] = users;
           obj1  obj2  obj3
=> console.log(user1) -> { userId:1,name:"john",age:25,}
=> console.log(user2) -> { userId:2,name:"jane",age:30,
=> console.log(user3) -> { userId:3,name:"jim",age:35,
here user1, user2 and user3 the 3 objects inside of the array respectively



=> we can also partially destructure and store any particular property of a object
in a variable
? const [{name: user1}, , {age: Uage}] = users;
           obj1     obj2    obj3
console.log(user1) -> john
console.log(Uage) -> 35

? const [user1, {name:user2Name,age:user2Age}] = users;
           obj1          obj2
console.log(user1) -> { userId:1,name:"john",age:25,}
console.log(user2Name) -> john
console.log(user2Age) -> 25





 
 




*/








//! FUNCTION THAT CREATE OBJECTS
/* //* INTRO
const user1 = {
    firstName: "harshit",
    lastName: "vashistha",
    age: 20,
    email: "harshitvashistha@gmail.com"
    address: " dehradun India"
    about: function(){
        return `${this.firstName} is ${this.age} years old`
    }
    is18: function(){
        return this.age >= 18
    }
}

writing all these key-value pairs for the users is a very time taking work
so we will make a fxn that creates obj for uss and take input key-value pairs
so 3 things this fxn will do:
1. create obj
2. add key-value pair
3. return obj

function createUser(firstName, lastName, age, email, address){      we will not pass the function key-value pair as parameter because they are same for every user
    const user = {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`
    };
    user.is18 = function(){
        return this.age >= 18
    };
    return user;
}

?creating objects:
const user2 = createUser("ansuman", "padhy", 18, "ansuman@gmail.com", "berhampur");
console.log(user2) -> {firstName: 'ansuman', lastName: 'padhy', age: 18, email: 'ansuman@gmail.com', address: 'berhampur', …}
const is18 = user1.is18();
console.log(is18) -> true



* RESOLVING FLAWS IN THE ABOVE FUNCTION
1. if we create 10000 users, the 2 fxn will ocuppie memory 10000times as they have unique address for unique objects
but all the objects require these 2 fxns
so we will store these 2 fxns in another object and use their reference in createUser fxn
this way for all the user the fxn has fixed address and take minimal storage in memory

const userMethods = {
    about: function(){
        return `${this.firstName} is ${this.age} years old`
        },
    is18: function(){
        return this.age >= 18
    }
}
function createUser(firstName, lastName, age, email, address){     
    const user = {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
 ?  user.about = userMethods.about;
 ?  user.is18 = userMethods.is18;
    
    return user;
}


2. //* __proto__
if we have 10000 functions in userMethods, adding these fxn in createUser function is very timetaking and risky
because if you dont declare that function in createUser again, then that will create an issue

so we have to make userMethod as backup of user obj so that, is we dont find any function in user
then js will search that fxn in userMethod obj
how to do this?
using __proto__ we can do this

=> eg: const obj1 = {
    key1: "value1",
    key2: "value2"
}
const obj2 = {
    key3: "value"
}
console.log(obj2.key1) -> undefined
but i want that if any key is missing in obj2 then it should search that in obj1

so we will use Object.create method to create objs
 const obj1 = {
    key1: "value1",
    key2: "value2"
}
? const obj2 = Object.create(obj1);
this code will make obj1 as backup of obj2
this code created obj2 which is empty
console.log(obj2) -> {}
obj2.key3 = "value3"  (added a key-value pair in obj2)
console.log(obj2) -> {key3: "value3"}
console.log(obj2.key1) -> "value1"  (js searched key1 in obj1)
console.log(obj2.__proto__) -> { key1: "value1", key2: "value2"}


=> so applying the samething in our createUser function 
const userMethods = {
    about: function(){
        return `${this.firstName} is ${this.age} years old`
        },
    is18: function(){
        return this.age >= 18
    }
}
function createUser(firstName, lastName, age, email, address){   
    const user = Object.create(userMethods);  (userMethods is proto of user)
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
 
    return user;
}
console.log(user2.is18()) -> true
we have accessed user2 is18 function without creationg it inside createUser fxn




3.  //* prototype
=>in javascipt fuction acts as function and also partially as object
becuase we can store some key:value pair in object 
=>the object part of a function is called as prototype
=> by default every function has one key-value pair

function hello(){
    console.log("hello world")
}
?console.log(hello.prototype) -> constructor: ƒ hello()
?console.log(hello.name) -> hello

adding key-value in prototype:
?hello.prototype.abc = "abc"
hello.prototype.sing = function(){return "lalallla"}
?console.log(hello.prototype) -> {abc: 'abc', sing: ƒ}
?console.log(hello.prototype.sing()) -> lalalla
so you can treat "hello.prototype" as a object

=> implementing this thing in our main example:
so if we have a object along with out createUser fxn, then no need to create another object userMethods

function createUser(firstName, lastName, age, email, address){   
?   const user = Object.create(createUser.prototype);  
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
 
    return user;
}
adding the functions in createUser prototype:
? createUser.prototype.about = function(){
        return `${this.firstName} is ${this.age} years old`
        }
? createUser.prototype.is18 = function(){
        return this.age >= 18
    }




4.  //* NEW KEYWORD
can we create a object creating fxn without using
const user = Object.create(createUser.prototype)  ??
this code was written to make user backup with createUser.prototype

using new keyword we can do this,
 function createUser(firstName, lastName, age, email, address){        
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
 }       (no need to return anything)

  createUser.prototype.about = function(){
        return `${this.firstName} is ${this.age} years old`
        }

? const user2 = new createUser("ansuman", "padhy", 18, "ansuman@gmail.com", "berhampur")
? this new keyword will automatically backup createUser.prototype for user2
 console.log(user1.about()) -> ansuman is 18 years old
 console.log(user1) -> {firstName: 'ansuman', lastName: 'padhy', age: 18, email: 'ansuman@gmail.com', address: 'berhampur', …}

 so here new keyword is doing 3 things for user2
 1. adding the key-value pairs present in createUser fxn
    here this keyword is working for user2 (using new keyword)
 2. __proto__ createUser with createUser.prototype automatically
 3. returning user2 fron createUser fxn

=> now if you want to iterate user2 using for in loop
for(let key in user2){
    console.log(key)
    -> firstName
       lastName
       age
       email
       address
       about
  ? here it is also printing the __proto__ keys
}

if you want keys present in user2 originally not in the __proto__, then do this:
for(let key in user2){
 ?   if(user2.hasOwnProperty(key)){
    console.log(key)}
}




* CLASS
can we make our above code more shorter and structured?
using classes and new keyword we can do this
in the above code we have in total 2 things, one is the constructor function, and another is a prototype object in which we have separately stored our function key value pairs

? class createUser {
   ?   constructor(firstName, lastName, age, email, address){             this constructor fxn will automatically take the arguments from createUser using new kew keyword 
         this.firstName = firstName;
         this.lastName = lastName;
         this.age = age;
         this.email = email;
         this.address = address;
      }

 ?     about(){                      this fxn is added to the prototype of createUser class/fxn,  also this function is automatically __proto__ of constructor,  using new keyword
        return `${this.firstName} is ${this.age} years old`
      }
}
? const user2 = new createUser("ansuman", "padhy", 18, "ansuman@gmail.com", "berhampur")    creating user using createUser class
console.log(user2.about()) -> ansuman is 18 years old
console.log(user2) ->   createUser {firstName: 'ansuman', lastName: 'padhy', age: 18, email: 'ansuman@gmail.com', address: 'berhampur'}
address: "berhampur"
age: 18
email: "ansuman@gmail.com"
firstName: "ansuman"
lastName: "padhy"
__Proto__: Object
    about: ƒ about()




*/



  






 
 
















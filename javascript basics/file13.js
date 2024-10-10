//! call,apply.bind
/* //* CALL:
 another way of fxn call
 Eg: function hello(){
    console.log("hello world")
 }
hello();
(or)
? hello.call();    fxn call using call method

=> const user1 = {
    name: "harshit",
    age: 20,
    about: function(){
        console.log(this.name, this.age) -> harshit 20
    }
}
const user 2 = {
    name: "mohit",
    age: 22,
}

if i want to use about fxn for user2 without writng 2nd time do this:
? user1.about.call(user2) -> mohit 22 
the obj written in the brackets will be "this" obj
here we are calling about fxn using user1 becuase the fxn is inside user1 obj, but the "this" keyword is taking user2 as writen in the call brackets
call method takes the obj as argument which will be taken by "this" keyword

if you want to call user1 using call method
? user1.about.call(user1) -> harshit 20
means no matter where is about fxn, using call fxn we can set the value of "this" keyword

=> in call fxn along with the obj name for "this", otherthan that we can also pass the arguments like this
const user1 = {
    name: "harshit",
    age: 20,
    about: function(a,b){
        console.log(this.name, this.age,a,b) 
    }
}
const user 2 = {
    name: "mohit",
    age: 22,
}
? user1.about.call(user2, "guitar", 50) -> mohit 22 guitar 50
"a" parameter is taking "guitar" as argument
"b" parameter is taking 50 as argument


=> another way of doing all these:
function about(a,b){
    console.log(this.name, this.age,a,b)
}

const user1 = {
    name: "harshit",
    age: 20,
}
const user 2 = {
    name: "mohit",
    age: 22,
}
? about.call(user1, "guitar", 50) -> harshit 20 guitar 50
? about.call(user2, "guitar", 50) -> mohit 22 guitar 50


* APPLY
apply method is used to call the function with array of arguments
function about(a,b){
    console.log(this.name, this.age,a,b)
}

const user1 = {
    name: "harshit",
    age: 20,
}
const user 2 = {
    name: "mohit",
    age: 22,
}
? about.apply(user1, ["guitar", 50]) -> harshit 20 guitar 50
? about.apply(user2, ["guitar", 50]) -> mohit 22 guitar 50


* BIND
bind will do nothing but store the output of the about fxn in another fxn
we can access the output anytime by calling the another fxn
unction about(a,b){
    console.log(this.name, this.age,a,b)
}

const user1 = {
    name: "harshit",
    age: 20,
}
const user 2 = {
    name: "mohit",
    age: 22,
}
const func = about.bind(user1, "guitar", 50);
? func() -> harshit 20 guitar 50


*/ 

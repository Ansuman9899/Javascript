//! more about functions
/*  //* CALLBACK FUNCTIONS 
=> function myfunc(a){
      console.log(a) -> [1,2,3]
} 
myfunc([1,2,3]);
if i pass array as a parameter then my arguments will also be a parameter  

=> function myfunc(a){
      console.log(a) -> "Ansu"
} 
myfunc("Ansu");
if i pass string as a paramter then my argument will also be a string

=> similarly
 function myfunc2(){
    console.log("inside myfunc2")
 }
 function myfunc(callback){   here it is taking myfunc2 whole function as a argument
   ? console.log(callback) ->  ƒ myfunc2(){console.log("inside myfunc2")}
     callback(); 
 }
? myfunc(myfunc2);    // callingback function(calling one fxn using another fxn)
output:
ƒ myfunc2(){console.log("inside myfunc2")}
inside myfunc2






* FUNCTION RETURNING FUNCTION
=> function myfunc(){
    return "a";
}
const ans = myfunc();
console.log(ans); -> a
if the fxn return a string, ans becomes a string

=> function myfunc(){
    return [1,2,3];
}
const ans = myfunc();
console.log(ans); -> [1,2,3]
if the fxn return an array, ans becomes an array

=> function myfunc(){
    return {name:"ansuman", age:18};
}
const ans = myfunc();
console.log(ans); -> {name:"ansuman", age:18}
if the fxn return a object, ans becomes a object

=> similarly
 function myfunc(){
    function hello(){
        console.log("hello");
    }
   ? return hello;  // here myfunc fxn is returning another fxn hello
 }
 ? const ans = myfunc();  // here the whole hello fxn will be stored in ans which is returned by myfunc (ans has become the hello fxn itself)
 console.log(ans); -> ƒ hello(){console.log("hello");}
 ans(); (here when i call ans, hello fxn is getting called)
 -> hello


 function myfunc(){
    function hello(){
   ?     return "hello world"
    }
   ? return hello;  
 }
 ? const ans = myfunc();  // 
 console.log(ans()); -> hello world
 ? const returnedvalue = ans(); // here returnedvalue will store "hello world" which is returned by hello fxn and called by ans fxn


 
*/





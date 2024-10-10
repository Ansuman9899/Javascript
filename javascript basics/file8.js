//! FUNCTIONS 
/*  //* INTRO
function singsing(){  //fxn declaration
    console.log("I will sing a song");
}
singsing();  //fxn call
example:
function add(){
    return 2+4;
}
console.log(add()) -> 6

const Returnedvalue = add();
console.log(Returnedvalue) -> 6

? parameters and arguments
=> function sumtwoNo(num1,num2){ // these are called aa arguments
    return num1+num2;
}
Returnedvvalue = sumtwoNo(4,5) // these are called as parameters
console.log(Returnedvvalue) -> 9


* FUNCTION EXPRESSION
? const sumtwoNo = function(num1,num2){ 
    return num1+num2;
}

* ARRAOW FUNCTIONS
? const sumtwoNo = (num1,num2) => {
    return num1+num2;
    }

    if there is only one operation, it can be written like
?const sumtwoNo = (num1,num2) => num1+num2;




* FUNCTION INSIDE FUNCTION
function app(){
     function hello(){
        console.log("hello");
     }

     const add = function (num1,num2){
        return num1+num2;
     }

     const mul = (num1,num2) => num1*num2;

     console.log("inside app")
     hello();
     console.log(add(2,3));
     console.log(mul(2,3));
}
output:
inside app   hello    5     6





* LEXICAL SCOPE
function myApp(){
    const myVar = "value1"
    function myfunc(){
        console.log(" inside myfunc", myVar);
    }
    console.log(myVar);
    myfunc();
}
myApp();
output:
value1
inside myfunc value1

when myVar is not declared inside mufunc, it takes myVar of
its parent funcion myApp



function myApp(){
    const myVar = "value1"
    function myfunc(){
        const myVar = "value69"
        console.log(" inside myfunc", myVar);
    }
    console.log(myVar);
    myfunc();
}
myApp();
output:
value1
inside myfunc value69

?   Means if variable is declared inside the function, then it takes 
?   the variable value, otherwise it finds the variable directly in it's
?   parent or grandparent or......










*/ 
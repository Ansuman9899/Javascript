//!  parameters
/*   //* DEFAULT PARAMETERS
=> no of parameters = no of arguments
    function addtwo(a,b){
    return a+b;
}
console.log(addtwo(4,5)) -> 9

=> no of parameters < no of arguments
function addtwo(a,b){
    return a+b;
}
console.log(addtwo(4)) -> NaN
how to fix this??

1. good method
function addtwo(a,b){
    if(typeof b === "undefined"){ b=0 }
    return a+b;
}

2. best method
? function addtwo(a,b=0){
    return a+b;
}
console.log(addtwo(4))  -> 4
here if you dont pass any parameter, it will set b=0




* REST PARAMETRES
? function myfunc(a,b,...c){
    console.log(`a is ${a}`); -> a is 3
    console.log(`b is ${b}`); -> b is 4
    console.log(`c is ${c}`); -> c is [5,6,7,8,9]
}
myfunc(3,4,5,6,7,8,9);
here "...c" is taking all the rest parameters




* PARAMETER DESTRUCTURING
? const person = {name:"ansuman", gender:"male"}
1. good method
function details(obj){
    console.log(obj.name); -> ansuman
    console.log(obj.gender); -> male
}
details(person);

2. Best method
? function details({name,gender}){ (equivalent of writing {name,gender} = obj)
    console.log(name); -> ansuman
    console.log(gender); -> male
}
details(person);
here value of name key will be stored in "name" variable
and value of gender key will be stroed in "gender" variable




*/
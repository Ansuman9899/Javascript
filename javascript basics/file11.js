//! Important array methods
/*  //* FOREACH
const numbers = [4,2,5,8];
i want to make a function which will take index and number as argument and print them

 function myFunc(number, index){
     console.log(`index is ${index} number is ${number}`);
 }

 now iterating the function using for-loop to print all the index and numbers
 for(let i=0; i<numbers.length; i++){
    myFunc(numbers[i], i); // each time this will take the index and its value in array as parameter
 }
 
 we have second better option, instead of looping use foreach method to fo this
? numbers.foreach(myFunc);  ( foreach fxn is calling back myfunc fxn and giving them all numbers and index respectively as parameter)

other way of writing:
? numbers.foreach(function(number,index){
    console.log(`index is ${index} number is ${number}`) 
})  
with using foreach fxn no need to loop the iterators in for loop

Q: if you what to print double of the numbers along with their index
numbers.foreach(function(number,index){
    console.log(number*2, index) 
}) 


=> const users = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Bob', age: 35}
]
 print the name of each user
 ? users.foreach(function(user){ this will iterate through each object in the array and we can accest their props
    console.log(user.name); -> john jane bob 
 }




 * MAP METHOD
 const numbers = [3,4,6,1,8];
 always use map fxn on the funtions which are returning something
 map method returns an array

 const square = function(number){
    return number*number;
 }
? const squaredNumbers = numbers.map(square);
or
 ? const squaredNumbers = numbers.map(function(number){
    return number*number;
 })
 console.log(squaredNumbers) -> [9,16,36,1,64]
? map fxn apply the call back function to each element of the array and return a updated array 




* FILTER METHOD
const numbers = [1,3,2,6,4,8];
the callback fxn should return a boolean value
filter method returns a filtered array 

const isevm = function(number){
    return number % 2 === 0;
}

? const evenNumbers = numbers.filter(iseven);
or 
? const evenNumbers = numbers.filter(function(number){
    return number % 2 === 0;
})
const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
})

console.log(evenNumbers) -> [2,6,4,8]




* REDUCE METHOD
used to get sum of all elements
const numbers = [1,2,3,4,5]

? const sum = numbers.reduce((accumulator, currentvalue)=>{
?    return accumulator + currentvalue;
? })
console.log(sum) -> 15

accumulator  currentvalue  return
 numbers[0]   numbers[1]
  1             2             3
  3(prv return)  3             6
  6             4             10
  10             5             15(final return)

 => we can also set a initial value
  const numbers = [1,2,3,4,5]
 ? const sum = numbers.reduce((fxn){},intialvalue)
  const sum = numbers.reduce((accumulator, currentvalue)=>{
        return accumulator + currentvalue;
   }, 100)  //initial value is 100

    console.log(sum) -> 115

accumulator    currentvalue     return
initialvalue     numbers[0]
  100               1           101
  101               2           103
  103               3           106
  106               4           110
  110               5           115(final return)


=> // const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
}, 0)
console.log(totalAmount) -> 49000
here totalPrice = accumulator
currentProduct = currentvalue

totalprice       currentproduct            return
intialvalue     currentproduct.price 
 0                  12000                   12000
 12000               22000                   34000
 34000               15000                   49000(final return)






 * SORT METHOD
 => sort method can mutate the original array
 const numbers = [5,9,1200,400,3000] 
 ?numbers.sort();  
 console.log(numbers); -> [1200,3000,400,5,9]
 ?this unexpected result is because of the sort method is treating the numbers as strings
 ?and sorting them according their ASCII value (ascii value of their first digit)
 0:48
 1:49
 2:50
 3:51
 4:52
 5:43
 6:44
 7:55
 8:56
 9:57

 => const usernames = ["ansuman", "abc", "mohit","Nitish", "zumba"]
usernames.sort();
console.log(usernames); -> ['Nitish', 'abc', 'ansuman', 'mohit', 'zumba']
it is sorting the strings acc to their ASCII value



=> how to sort an array??
const numbers = [5,9,1200,410,3000]
? numbers.sort((a,b)=>a-b)
console.log(numbers); -> [5,9,410,1200,3000]

?how this is working:
sort method is taking two parameters a and b, which are taking 2 consecutive array elements as argument in loop till end of array
if a-b > 0 then swap a and b
if a-b < 0 then do nothing

if you want to sort in decending order
const numbers = [5,9,1200,410,3000]
? numbers.sort((a,b)=>b-a)
console.log(numbers); -> [3000,1200,410,9,5]


=> const products = [
    {productId: 1, name:"p1", price:200},
    {productId: 2, name:"p2", price:300},
    {productId: 3, name:"p3", price:100},
    {productId: 4, name:"p4", price:400},
    {productId: 5, name:"p5", price:500}
]
lowtohigh:
? products.sort((a,b)=>{ return a.price - b.price})  // here and b are taking 2 consecutive objects as argument in loop till end of array 
console.log(products) 
-> [ {productId: 3, name:"p3", price:100},
    {productId: 1, name:"p1", price:200},
    {productId: 2, name:"p2", price:300},
    {productId: 4, name:"p4", price:400},
    {productId: 5, name:"p5", price:500} 
]

but if you dont want to mutate your original array then do this:
  ? const lowtohigh = products.slice(0).sort((a,b=>a.price-b.price))  // here slice method is cloning an new array and sort method is sorting the cloned array
this way the original array is not muted but a another sorted array is created
console.log(lowtohigh) -> 
-> [ {productId: 3, name:"p3", price:100},
    {productId: 1, name:"p1", price:200},
    {productId: 2, name:"p2", price:300},
    {productId: 4, name:"p4", price:400},
    {productId: 5, name:"p5", price:500} 
]

hightolow:
? products.sort((a,b)=>{ return b.price - a.price})  






* FIND METHOD
 it will find the first element in the array satisfying the callback fxn
 const myarray = ["Hello","cat","dog","lion"]

 function islength3(string){
    return string.length === 3;
 }
 ?const result = myarray.find(islength3);
 ? const result = myarray.find((string=>string.length === 3));
 console.log(result) -> "cat"  // it will return the first element in the array that is of 3 characters


=> const users = [
    {userId:1, name:"ansuman"},
    {userId:2, name:"sourav"},
    {userId:3, name:"gourav"},
    {userId:4, name:"dhruv"},
    {userId:5, name:"modi"},
]

const myUser = users.find((user)=>user.userId===3);
console.log(myUser) -> {userId: 3, name: 'gourav'}






* EVERY METHOD
callback fxn should return in boolean
every fxn also returns in boolean
if for all the elements callback fxn gives true, then only every fxn will return true, 
if one of them not, it will return false

=> const numbers = [2,4,6,8,10];
const ans = numbers.every((number)=>number%2==0);
console.log(ans) -> true

=> const numbers = [2,4,6,8,10,11];
const ans = numbers.every((number)=>number%2==0);
console.log(ans) -> false


=> const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]
i have to cheak if all the item's price are less then 3000
const ans = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(ans) -> true




* SOME METHOD
callback fxn should return in boolean
some fxn also returns in boolean
it returns true if atleast anyone element in the array satisfy the callback fxn

=> const numbers = [2,4,6,8,10];
?const ans = numbers.some((number)=>number%2===0);
console.log(ans) -> true

=> const numbers = [1,3,5,7,8];
const ans = numbers.some((number)=>number%2===0);
console.log(ans) -> true

=> const numbers = [1,3,5,7,9];
const ans = numbers.some((number)=>number%2===0);
console.log(ans) -> false

=> const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
    {productId: 4, productName: "Ipad", price: 150000}
]
cheak if any product prize is more than 100000
? const ans = userCart.some((cartItem)=>cartItem.price > 100000);
console.log(ans) -> true




* FILL METHOD
fill method is used to fill the array with same value
it takes two argument first is the value and second is the length of the array

if i want an array with 10 1s
? const myArray = Array(10).fill(1);
console.log(myArray) -> [1,1,1,1,1,1,1,1,1,1]

=> const myArray = [1,2,3,4,5,6,7,8]
? myArray.fill(digit to fill, starting index, ending index(excluded));
? const ans = myArray.fill(0, 3, 6);   
console.log(ans) -> [1,2,3,0,0,0,7,8] 



* SPLICE METHOD
splice method is used to add or remove elements from the original array

const myArray = ["item1","item2","item3"];
? myArray.splice(starting index, how many to delete,what to insert)

delete:
?myArray.splice(1,1); it will delete 1 item from index 1
console.log(myArray) -> ["item1","item3"]

we can also store the deleted item in an array
? const deletedItem = myArray.splice(1,1);
console.log(deletedItem) -> ["item2"]

const deletedItem = myArray.splice(1,2);
console.log(deletedItem) -> ["item2","item3"]

insert:
?myArray.splice(1,0,"inserted item"); it will insert this item in 1 index and other items will shift to right
console.log(myArray) -> ["item1","inserted item","item2","item3"]

insert and delete together:
const myArray = ["item1","item2","item3"]
?cosnt deletedItem = myArray.splice(1,2,"inserted item1", "inserted item2");
console.log(myArray) -> ["item1","inserted item1","inserted item2"]
console.log(deletedItem) -> ["item2","item3"]




*/










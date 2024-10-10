//!  Cloning and destructuring of array
/*   //* HOW TO CLONE AN ARRAY
  let array1 = ["item1","item2"];
1. 
   ?let array2 = array1;
    the problem with this methode is the array data has
    same address in memory for both array1 and array2
    if any change in each of them can effecr another

2. 
   ?let array2 = array1.slice(0);
this method will create a new array with same data as array1
but each array has different address in memory

3. 
   ?let array2 = [].concate(array1);
 here we are adding the elements of array1 to an empty array(array2)
 through concating(adding).

4.
    ?let array2 = [...array1]; (using spread operator)
this is the most efficient way to clone an array in modern js

* CLONE WITH EXTRA ITEMS
let array1 = ["item1","item2"];
2. 
? let array2 = array1.slice(0).concate(["item3","item4"])
3. 
? let array2 = [].concate(array1,["item3", "item4"])
4. 
? let array2 = [...array1, "item3", "item4"]

? you can use these array methods to modify array even if declared with "const"




* ARRAY DESTRUCTURING
let array = ["value1","value2","value3"];
               0        1        2
you want to store these values in 3 distinct variables
let myvar1 = array[0];
let myvar2 = array[1];
let myvar3 = array[2];

but we can do this thing easily using array destructuring

?let [myvar1,myvar2,myvar3] = array;
        0      1      3
here myvar1 will store value of array[0] = value1
myvar2 will store value of array[1] = value2
myvar3 will store value of array[2] = value3

=> let array = ["value1","value2","value3"];
let i want to store value1 in myvar1 and value3 in myvar3
?let [myvar1, , myvar3] = array; (just skip the index you dont want to store in a variable)

=> let array = ["value1","value2","value3","value4"];
?let [myvar1, myvar2, ...Newarray] = array;
        0      1          2  3
here myvar1 will store value1 and myvar2 will store value2,
rest of the values will be stored in Newarray
console.log(Newarray) -> ["value3","value4"];











*/





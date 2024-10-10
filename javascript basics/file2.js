//! string methods 
/* //* STRING INDEXING 

let name = "Ansuman Padhy";(12 letters)
            0123456789012
in string "space" also counts in indexing.

=> //? console.log(name[4]) -> m
=> //? console.log(name.length) -> 13 (string length)

=> let lastIndex = name[name.length-1] -> 12



* TRIM
let name = "   ram   "
            123456789
console.log(name.length) -> 9
as string is immutable it can't be trimmed itself
but can be trimmed to a new string 

? let newString = name.trim();
console.log(newString.length) -> 3
console.log(newString) -> ram (trimmed)
console.log(name) -> '   ram   ' (not changed)


* TO UPPERCASE / LOWERCASE
let name = "Ram";
console.log(name.toUpperCase()) -> RAM
?let capital = name.toUpperCase();
console.log(capital) -> RAM

console.log(name.lowercase()) -> ram
?let small = name.lowercase();
console.log(small) -> ram



* SLICE
let name = "Ansuman";
            0123456
?name.slice(starting index, ending index(not included))
console.log(name.slice(0, 5)) -> Ansum
console.log(name.slice(1, 6)) -> nsuma

?console.log(name.slice(2)) -> suman
if you put just one argument then from that index till
the end of the string it will slice

*/




//!  datatypes and conversions
/*  //* TYPE OF OPERATER 
  let age = 22;
  let name = "Ansuman";
  console.log(typeof age) -> Number
  console.log(typeof name) -> String
  console.log(typeof "Ansuman") -> String


  * NUMBERS TO STRING
  let age = 22;
  console.log(typeof (age + "")); -> String

  age = age + "";
  console.log(typeof age) -> String

  use + "" after the int to convert it to string


  *STRING TO NUMBER
  let digit = "34";
  console.log(typeof digit) -> String
  console.log(typeof +digit) -> Number
  console.log(typeof +"34") -> Number
 
  digit = +digit;
  console.log(typeof digit) -> Number

  use + before the string to convert it to number


  * ANOTHER CONVERSION METHOD
  let age = 22;
  age = string(age);
  console.log(typeof age) -> string 
  
  age = "18";
  age = number(age);
  console.log(typeof age) -> number

*/
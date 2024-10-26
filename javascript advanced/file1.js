//! DOM BASICS
/*  //* DOM INTRO
=> DOM stands for Document Object Model
=> all the elements in the html sotred as a key:value pair in document object, document object is presnt as a key-value pair inside window object
=> always remember in DOM every element is an object having many propeties as key-value pairs, child element object are present inside parent element object 
=> in DOM while selecting any element, we store the seleted element in a variable and then operate with the element through the variable


* SELECT ELEMENT USING GET ELEMENT BY ID
=> to use this method your element should have a id
for the html element   <h2 id="main-heading">Manage your tasks </h2>
? const mainHeading = document.getElementById("main-heading")
console.log(mainheading) -> h2#main-heading{...}
console.log(typeof mainHeading) -> Object


* SELECT ELEMENT BY QUERY SELECTOR
=> this method works both for class and id and also element name as like you given in css
for <h2 id="main-heading">Manage your tasks </h2>
? const mainHeading = document.querySelector("#main-heading")
console.log(mainHeading) -> h2#main-heading{...}

selecting element with class:
lets say this piece of html code:
    <li class="nav-item 1"><a href="#home">Home</a></li>
    <li class="nav-item 2"><a href="">Todo</a></li>
    <li class="nav-item 3"><a href="">Sign Up</a></li>

here all the 3 elements have same class
? const navItem = document.querySelector(".nav-item") 
console.log(navItem) -> li.nav-item.1 
? it selected only the first li element with class nav-item

to select all the li elements do this:
? const navItem = document.querySelectorAll(".nav-item")
console.log(navItem) -> NodeList(3) [li.nav-item.1, li.nav-item.2, li.nav-item.3]
                                          0              1             2


WE CAN ACCESS ELEMENTS NOT ONLY FROM DOCUMENT, BUT ALSO FROM OTHER PARENT ELEMENTS
for this code:
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <!-- <script src="file1.js" defer></script> -->
    <script src="file2.js" defer></script>
</head>

const title = document.querySelector("title") ✅
also we can access in head tag:
? const head = document.querySelector("head")
? const title = head.querySelector("title") ✅

* TEXT CONTENT VS INNER TEXT
for <h2 id="main-heading">Manage your tasks <span style="display: none">Hello</span></h2>
const mainHeading = document.getElementById("main-heading");
? console.log(mainHeading.textContent) -> Manage your tasks Hello
? console.log(mainHeading.innerText) -> Manage your tasks 



* CHNAGE STYLES OF ELEMENTS(style property)
const mainHeading = document.querySelector("#main-heading")
below will give all the styles given to main heading in an object format
? console.log(mainHeading.style)  -> CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
 ?"mainHeading.style" this also an object in which the css properties are key:value pairs

 styling elements:
? mainHeading.style.color = "blue";
  mainHeading.style.border = "2px solid red"

in case of css properties with more than one word do this:
 mainHeading.style.Background-color = "blue" ❌
 mainHeading.style.BackgroundColor = "blue" ✅ use camel case instead



* GET AND SET ATTRIBUTES
=> attributes means the properties given to a element like src,height,width,name,type,placeholder,...
* GET ATTRIBUTE:
getAttribute method will return you the value of any attribute given to a element
for the code:
        <li class="nav-item 1"><a href="#home">Home</a></li> ✅
        <li class="nav-item 2"><a href="">Todo</a></li>
        <li class="nav-item 3"><a href="">Sign Up</a></li>
    
    const link = document.querySelector("a")
  ? console.log(link.getAttribute("href")) -> #home

? NOTE: for const link = document.querySelectorAll("a") it will not work because getAttribute method cam take only one element at a time

for the code:
        <form class="form-todo">
          <input type="text" name="" id="" placeholder="Add Todo" />   ✅
          <input type="submit" value="Add Todo" class="btn" />
        </form>
    
    const inputElement = document.querySelector(".form-todo input")
  ? console.log(inputElement.getAttribute("type")) -> Text

* SET ATTRIBUTE:
setAttribute will change the value of attribute 
for the code:
        <li class="nav-item 1"><a href="#home">Home</a></li> ✅
        <li class="nav-item 2"><a href="">Todo</a></li>
        <li class="nav-item 3"><a href="">Sign Up</a></li>
    
    const link = document.querySelector("a")
    console.log(link.getAttribute("href")) -> #home
  ? link.setAttribute("href", "https://google.com")
    console.log(link.getAttribute("href")) -> https://google.com

  ?  means in general link.setAttribute("attribute name", "new value");



* GET MULTIPLE ELEMENTS BY "GET ELEMENT BY CLASSNAME" AND "QUERY SELECTOR ALL"
for the code:
        <ul class="nav-items">
          <li class="nav-item 1"><a href="#home">Home</a></li>
          <li class="nav-item 2"><a href="">Todo</a></li>
          <li class="nav-item 3"><a href="">Sign Up</a></li>
        </ul>
    
 ?  const navItems = document.getElementsByClassName("nav-item")
    console.log(navItems) -> HTMLCollection(3) [li.nav-item.1, li.nav-item.2, li.nav-item.3]
                                                    0               1               2
 ?  const navItems = document.querySelectorAll(".nav-item")
    console.log(navItems) -> NodeList(3) [li.nav-item.1, li.nav-item.2, li.nav-item.3]
                                                0               1               2
=> both html colllection and node list are array like objects, means they have index, length and they are iterable
   console.log(navItems[2]) -> li.nav-item.3
     WHAT IS DIFFERENCE BETWEEN HTML COLLECTION AND NODELIST?
   => //? we can't use for each loop with html collection, but can with nodelist

   loops:
   lets say you want to make text color green of all the 3 nav items which are directly inside "a" tag and indirectly inside "li" tag
   then, first of all store all the "a" tags and then iterate them and change their css 

?  const navItems = document.getElementsByTagName("a");
   console.log(navItems) -> HTMLCollection(3) [a, a, a]
   for(let i=0; i< navItems.length; i++){
?   const navItem = navItems[i]
?   navItem.style.color = "green"
   }


* INNER HTML
inner html is used to get html of all child tags of an element 
for this code:
        <div class="headline">
          <h2 id="main-heading">
            Manage your tasks <span style="display: none">Hello</span>
          </h2>
          <button class="btn btn-headline">Learn More</button>
        </div>
    
const headline = document.querySelector(".headline")
? console.log(headline.innerHTML) -> <h2 id="main-heading">
                                     Manage your tasks <span style="display: none">Hello</span>
                                    </h2>
                                    <button class="btn btn-headline">Learn More</button>

    we can change the inner html like this:
    headline.innerHTML = "<h1>Inner HTML Changed</h1>"   
    console.log(headline.innerHTML) -> <h1>Inner HTML Changed</h1>    
    
new code:
        <div class="headline">
          <h1>Inner HTML Changed</h1>
        </div> 
    




    
*/


const headline = document.querySelector(".headline")
    console.log(headline.innerHTML)
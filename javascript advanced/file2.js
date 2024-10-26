//! DOM TREE AND DOM TRAVERSING, CLASSLIST PROPERTIES
/*  //* TRAVERSING DOM TREE
? const rootNode = document.getRootNode();
? console.log(rootNode) -> #document       obj 
=> document is called as root node and html is called as root element

HOW TO SEE CHILD NODES OF AN ELEMENT?
PARENT TO CHILD RELATION:
? console.log(rootNode.childNodes) -> NodeList(2) [<!DOCTYPE html>, html]
? const htmlElementNode = rootNode.childNodes[1]
? console.log(htmlElementNode) -> html       obj

? console.log(htmlElementNode.childNodes) -> NodeList(3) [head, text, body]
? const headElementNode = htmlElementNode.childNodes[0]
? console.log(headElementNode) -> head       obj
? const textNode1 = headElementNode.childNodes[1]
? console.log(textNode1) -> text       obj
? const bodyElementNode = headElementNode.childNodes[2]
? console.log(bodyElementNode) -> body       obj 

CHILD TO PARENT RELATION
? console.log(headElementNode.parentNode) -> html         obj

SIBLING RELATION:
the next sibling of head node is text node and next sibling of text node is body node
? console.log(headElementNode.nextSibling) -> #text        obj
? console.log(headElementNode.nextSibling.nextSibling) -> body            obj

if you want to ignore the text nodes in between the element nodes, if you only want element nodes as sibling not any text node, then do this:
? console.log(headElementNode.nextElementSibling) -> body            obj

IF YOU WANT TO GET CHILD ELEMENT IGNORING ALL TEXT NODES THEN DO THIS:
console.log(htmlElementNode.childNodes) -> NodeList(3) [head, text, body] ❌
console.log(htmlElementNode.children) -> HTMLCollection(2) [head, body] ✅





*  CLASS LIST, ADD, REMOVE, TOGGLE
CLASS LIST:
=> if you want a list of classes given to a element then use "classList" property
   for the code:
      <section class="section-todo container">
         <h2>Your plan for today ?</h2>
         
         <form class="form-todo">
           <input type="text" name="" id="" placeholder="Add Todo" />
           <input type="submit" value="Add Todo" class="btn" />
         </form>
      </section>

    const sectionTodo = document.querySelector(".section-todo")
 ?  console.log(sectionTodo.classList) -> DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']

=> we can also check if a class exist in classList or not
? console.log(sectionTodo.classList.contains("container")) -> true

ADD:
=> if you want to add a class to an element then use "classList.add()" method
? sectionTodo.classList.add("bg-dark")  
console.log(sectionTodo.classList) -> DOMTokenList(3) ['section-todo', 'container', 'bg-dark', value: 'section-todo container bg-dark']

REMOVE:
=> if you want to remove a class to an element then use "classList.remove()" method
? sectionTodo.classList.remove("container")  
console.log(sectionTodo.classList) -> DOMTokenList(2) ['section-todo', 'bg-dark', value: 'section-todo bg-dark']

TOGGLE:
it will add a class if it is not present in classList and remove the class if already present in classList
? sectionTodo.classList.toggle("new-class")
console.log(sectionTodo.classList) -> DOMTokenList(3) ['section-todo', 'bg-dark', 'new-class', value: 'section-todo bg-dark new-class']

? sectionTodo.classList.toggle("bg-dark")
console.log(sectionTodo.classList) -> DOMTokenList(2) ['section-todo', 'new-class', value: 'section-todo new-class']
 








*/









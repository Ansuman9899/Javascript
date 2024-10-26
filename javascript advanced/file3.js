//! CREATING AND ADDING ELEMENTS IN HTML USING JS
/*  //* ADD HTML USING JS
for the code:
    <section class="section-todo container">
        <h2>Your plan for today ?</h2>
        <!-- todo form  -->
        <form class="form-todo">
          <input type="text" name="" id="" placeholder="Add Todo" />
          <input type="submit" value="Add Todo" class="btn" />
        </form>

        <ul class="todo-list"> 
          <li class = "first-todo"> todo1 </li>
          <li> todo2 </li>
        </ul>
    </section>

?    todoList = document.querySelector(".todo-list")
    console.log(todoList.innerHTML) -> <li class = "first-todo"> todo1</li>  <li> todo2 </li>

    we want to add another item in our todo-list ul

    * append
    with this we can add element as last child wrt parent, the new element will be its last child
 ?   todoList = document.querySelector(".todo-list")   // selected todo-list class ul
 ?   const newTodoItem = document.createElement("li")    // created li
 ?   newTodoItem.textContent = "Teach Students"         // added text in created li
     todoList.append(newTodoItem)                       // added created li in todo-list as last child
 changes can be seen in web page
 ? console.log(todoList.innerHTML) -> <li class = "first-todo"> todo1</li>  <li> todo2 </li>  <li>Teach Students</li>

    * prepend
    with this we can add element as first child wrt parent, the new element will be its first child
 ?  todoList = document.querySelector(".todo-list")       // selected todo-list class ul
    const newTodoItem = document.createElement("li")        // created li
    newTodoItem.textContent = "Teach Students"              // added text in created li
    todoList.prepend(newTodoItem)                        // added created li in todo-list as first child
 changes can be seen in web page
?  console.log(todoList.innerHTML) -> <li>Teach Students</li>  <li class = "first-todo"> todo1</li>  <li> todo2 </li>

    * remove
?   todoList = document.querySelector(".todo-list")
    console.log(todoList.innerHTML) -> <li class = "first-todo"> todo1</li>  <li> todo2 </li>
    
    const todo1 = document.querySelector(".todo-list li")     // first li = todo1
    todo1.remove();
?   console.log(todoList.innerHTML) -> <li> todo2</li>


    * before
    with this we can add a element before that element wrt that element, the new element will be its sibling
?   todoList = document.querySelector(".todo-list")
?   const newTodoItem = document.createElement("li")
?   newTodoItem.textContent = "Teach Students"
    todolist.before(newTodoItem)
    const todoSection = document.querySelector(".section-todo")
?   console.log(todoSection.innerHTML) -> 
 ->    <h2>Your plan for today ?</h2>
        <!-- todo form  -->
        <form class="form-todo">
          <input type="text" name="" id="" placeholder="Add Todo">
          <input type="submit" value="Add Todo" class="btn">
        </form>
  
   ?    <li>Teach Students</li>
   ?    <ul class="todo-list"> 
          <li class = "first-todo"> todo1</li>
          <li> todo2</li>
        </ul>

?   the new elemnt "li" is sibling of todolist and child of todoSection 

    * after
    with this we can add a element after that element wrt that element, the new element will be its sibling
?   todoList = document.querySelector(".todo-list")
?   const newTodoItem = document.createElement("li")
?   newTodoItem.textContent = "Teach Students"
    todolist.after(newTodoItem)
    const todoSection = document.querySelector(".section-todo")
?   console.log(todoSection.innerHTML) -> 
->      <h2>Your plan for today ?</h2>
        <!-- todo form  -->
        <form class="form-todo">
          <input type="text" name="" id="" placeholder="Add Todo">
          <input type="submit" value="Add Todo" class="btn">
        </form>
  
   ?    <ul class="todo-list"> 
          <li class = "first-todo"> todo1</li>
          <li> todo2</li>
        </ul>
   ?    <li>Teach Students</li>

   ?   the new elemnt "li" is sibling of todolist and child of todoSection 

    * replace
?   ul = document.querySelector(".todo-list") 
?   const li = document.createElement("li")       
    newTodoItem.textContent = "new todo"

?   referenceNode = document.querySelector(".first-todo")
i want to replace .first-todo with newTodoItem
?   ul.replaceChild(li, referenceNode)

? means in general ul.replaceChild(new child, old child)



* CLONE NODES
why to clone nodes?
see the following code:
    const ul = document.querySelector(".todo-list")
    const li = document.createElement("li")
    li.textContent = "new todo"
    ul.append(li)  --> i want li as last child
    ul.prepend(li)  --> i also want li as first child

but sadly we cant do both append and prepend both to add the same node, here prepend will happen but not append
 thats why we have to make its clone and then append or prepend it

 we will use "cloneNode(true)" method for cloning
    const ul = document.querySelector(".todo-list")
    const li = document.createElement("li")
    li.textContent = "new todo"
 ?  const li2 = li.cloneNode(true)
    ul.append(li)  --> i want li as last child
    ul.prepend(li)  --> i also want li as first child
now append and prepend both will happen 😊



* STATIC LIST V/S LIVE LIST
for the code:
        <ul class="nav-items">
          <li class="nav-item 1"><a href="#home">Home</a></li>
          <li class="nav-item 2"><a href="">Todo</a></li>
          <li class="nav-item 3"><a href="">Sign Up</a></li>
        </ul>

const navItems = document.getElementsByClassName("nav-item")
    console.log(navItems) -> HTMLCollection(3) [li.nav-item.1, li.nav-item.2, li.nav-item.3]

const navItems = document.querySelectorAll(".nav-item")
    console.log(navItems) -> NodeList(3) [li.nav-item.1, li.nav-item.2, li.nav-item.3]

=> node list is a static list beacuse if we append, prepend, remove... to the nav-items there will be no change in the node list collection
where as html list we give the updated items, thats why html collection is a live list


*/





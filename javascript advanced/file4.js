//! EVENTS 
/*  //* EVENT LISTENER AND CLICK EVENT
=> event means interacting with web page, in simple words you do some action to the webpage and for that the webpage do some action
for the code:
<button class="btn btn-headline">Learn More</button>

const btn = document.querySelector(".btn-headline")
function clickMe(){
    console.log("you clicked me!!!")
}
? btn.addEventListener("click", clickMe)

or
? btn.addEventListener("click", function(){
    console.log("you clicked me!!!")
})

or
? btn.addEventListener("click", () => {
    console.log("you clicked me!!!")
    })

means in general btn.addEventListener("event name", fxn(){what to do when event is called})

=> in case of normal fxn
btn.addEventListener("click", function(){
    console.log("you clicked me!!!")
    console.log(this) -> <button class="btn btn-headline">
})
when "this" key word is used in a eventlistener that gives the element obj itslef on which eventlistener is added

=> in case of arrow function
    btn.addEventListener("click", () => {
    console.log("you clicked me!!!")
    console.log(this) -> Window            obj
    })


* CLICK EVENT ON MULTIPLE BUTTONS  (added to clickevent.html)
const allButtons = document.querySelectorAll("Button");
for(let button of allButtons){
     button.addEventListener("click", function(){
         console.log(this);
     })
 }


* EVENT OBJECT
=> event object is a object that contains information about the event that triggered the event listener
=> event object is passed as an argument to the event listener function and it is given by the browser to the callback function as argument
const allButtons = document.querySelectorAll("Button");
for(let button of allButtons){
 ?   button.addEventListener("click", function(e){
         console.log(e);   -> PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
     })
 }
? e.target Refers to the element that triggered the event, It doesn't change during event propagation.
? e.currentTarget Refers to the element that the event listener is attached to, It can change during event propagation.
for(let button of allButtons){
    button.addEventListener("click", function(e){
         console.log(e.target);   -> this will print the button with which event is triggered
     })
 }
 for(let button of allButtons){
    button.addEventListener("click", function(e){
         console.log(e.currentTarget);   -> this will print the button with which event listener is attached to(means button)
     })
 }














*/ 

const allButtons = document.querySelectorAll("Button");
for(let button of allButtons){
    button.addEventListener("click", function(e){
         console.log(e);
     })
 }

   





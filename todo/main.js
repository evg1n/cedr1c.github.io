// To-Do App v1.0
// author evg1n

// define variables for DOM manipulation
var userInput = document.getElementById("userInput");
var addButton = document.getElementById("addButton");
var ul = document.getElementById("list");

// return user input string length
function inputLength() {
    return userInput.value.length;
}
// create new task
function createListElement() {
    var li = document.createElement("li");
    var button = document.createElement("button");
    var p = document.createElement("p");
    li.appendChild(p);
    p.appendChild(document.createTextNode(userInput.value));
    li.appendChild(button);
    li.setAttribute("class", "list-group-item action");
    button.setAttribute("class", "btn btn-outline-danger float-right deleteButton");
    button.appendChild(document.createTextNode("X"));
    button.onclick = removeParent;
    ul.appendChild(li);
    userInput.value = "";
}

// click add button to add new task
function addClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

// press 'ENTER' to add new task
function addKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// click 'X' button to remove element
function removeParent(){
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}

// click to line-through credit NickPax
function getEventTarget(e){
    e = e || window.event;
    return e.target || e.srcElement;
}

// call addClick function on mouse click
addButton.addEventListener("click", addClick);
// call addKeypress function on 'ENTER' keypress
userInput.addEventListener("keypress", addKeypress);

//click to toggle strike-through
ul.onclick = function(event){
    var target = getEventTarget(event);
    target.classList.toggle("done");
}

/*Querry Selector*/
var contentList = document.querySelector("#contentlist"); 
var buttonAdd = document.querySelector("#add");
var inputText = document.querySelector("#inputText");
var blockList = document.querySelector("#blocklist");

/* Event Listener */
buttonAdd.addEventListener("click", ()=>{
    /* Creating the  Task Field*/
    var contentBox = document.createElement("div");
    var checkBox = document.createElement("input");
    var newContent = document.createElement("div");
    checkBox.type = "checkbox"

    /*Adding Styles*/
    checkBox.classList.add("Check");
    contentBox.classList.add("itencontent");
    newContent.classList.add("contentlist");

    /*Getting the input value*/
    var inputValue = inputText.value;

    /*Sending to the frontpage*/
    var text = document.createTextNode(inputValue);
    contentBox.appendChild(checkBox);
    contentBox.appendChild(text);
    newContent.appendChild(contentBox);
    //contentList.appendChild(contentBox);
    blockList.append(newContent);
});
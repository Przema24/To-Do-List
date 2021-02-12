"use strict"

const toDoListButton = document.getElementById("btn");
const toDoListTextBox = document.getElementById("text-box");
const toDoList = document.querySelector(".to-do-list");

toDoListButton.addEventListener("click", addItemToList);

function addItemToList() {
    let item = toDoListTextBox.value;
    if (item != "") {
        let elemList = document.createElement("li");
        elemList.innerHTML = "<p>" + item + "</p>";
        elemList.addEventListener("click", function() {
            elemList.classList.toggle("done");
        });
        toDoList.appendChild(elemList);

        /* Create close button */
        let closeBtn = document.createElement("span");
        closeBtn.classList.add("close");
        let txt = document.createTextNode("\u00D7");
        closeBtn.appendChild(txt);
        elemList.appendChild(closeBtn);

        /* Add close function */ 
        closeBtn.addEventListener("click", function() {
            closeBtn.parentNode.parentNode.removeChild(closeBtn.parentNode);
        })
    }
}


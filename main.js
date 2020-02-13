// JavaScript Document

function addNewTask() {
    // add new list from the user input
    let li = document.createElement("li");
     let task = document.getElementById("task").value;
     let getTask = document.createTextNode(task);
    li.appendChild(getTask);
    document.getElementById("list").appendChild(li);
    // delete text in the input element when task add
    document.getElementById('task').value = '';

    // add checkbox
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    li.appendChild(checkBox);

    // change text style and background when click the checkbox
    checkBox.addEventListener('click', clickTask);
    function clickTask() {
        if (this.checked === true) {
        li.style.textDecoration = 'line-through';
        li.style.backgroundColor = 'green';
        let bottomLi = document.getElementById('list');
        bottomLi.appendChild(li);
        // add ding sound
        let ding = new Audio('ding.mp3');
        ding.play();
        } else {
            li.style.textDecoration = '';
            li.style.backgroundColor = '';
        }
    }
    // add delete button
    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = 'Delete';
    button.addEventListener('click', deleteTask);
    li.appendChild(button);
    function deleteTask() {
        let li = this.parentElement;
        let ul = li.parentElement;
        ul.removeChild(li);
    }
}



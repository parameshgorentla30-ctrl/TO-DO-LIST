// Get HTML elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


// Add task function
function addTask() {

    // Get input value
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    li.className = "task";


    // Create check button
    const checkButton = document.createElement("button");

    checkButton.className = "check-button";

    checkButton.innerHTML = "✓";


    // Create task text
    const span = document.createElement("span");

    span.className = "task-text";

    span.textContent = taskText;


    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.className = "delete-button";

    deleteButton.innerHTML = "×";


    // Add elements to task
    li.appendChild(checkButton);
    li.appendChild(span);
    li.appendChild(deleteButton);


    // Add task to list
    taskList.appendChild(li);


    // Clear input
    taskInput.value = "";

    // Put cursor back into input
    taskInput.focus();


    // Complete task
    checkButton.addEventListener("click", function () {

        li.classList.toggle("completed");

    });


    // Delete task
    deleteButton.addEventListener("click", function () {

        li.remove();

    });
}


// Add task when button is clicked
addButton.addEventListener("click", addTask);


// Add task when Enter key is pressed
taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});

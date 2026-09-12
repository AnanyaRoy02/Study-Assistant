console.log("TASKS JS LOADED");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const taskSubject = document.getElementById("taskSubject");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskSummary = document.getElementById("taskSummary");


// ===============================
// ADD TASK
// ===============================

addTaskBtn.addEventListener("click", function () {

    const title = taskInput.value.trim();
    const subject = taskSubject.value;

    if (title === "") {
        alert("Please enter a task.");
        return;
    }

    const newTask = {
        id: Date.now(),
        title: title,
        subject: subject,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();

    taskInput.value = "";

    displayTasks();
});


// ===============================
// DISPLAY TASKS
// ===============================

function displayTasks() {

    taskList.innerHTML = "";

    if (tasks.length === 0) {

        taskList.innerHTML = `
            <p class="empty-message">
                No tasks added yet.
            </p>
        `;

        taskSummary.textContent = "0 tasks";

        return;
    }

    taskSummary.textContent =
        `${tasks.length} task${tasks.length > 1 ? "s" : ""}`;


    tasks.forEach(function (task) {

        const taskItem = document.createElement("div");
        taskItem.className = "task-item";

        if (task.completed) {
            taskItem.classList.add("task-completed");
        }


        // CHECK BUTTON

        const checkButton = document.createElement("button");

        checkButton.className = "check-button";

        if (task.completed) {
            checkButton.innerHTML =
                '<i class="ri-check-line"></i>';
        }

        checkButton.addEventListener("click", function () {
            toggleTask(task.id);
        });


        // TASK CONTENT

        const taskContent = document.createElement("div");

        taskContent.className = "task-content";


        const taskTitle = document.createElement("h3");

        taskTitle.textContent = task.title;


        const taskSubjectText = document.createElement("span");

        taskSubjectText.textContent = task.subject;


        taskContent.appendChild(taskTitle);
        taskContent.appendChild(taskSubjectText);


        // DELETE BUTTON

        const deleteButton = document.createElement("button");

        deleteButton.className = "delete-button";

        deleteButton.innerHTML =
            '<i class="ri-delete-bin-line"></i>';

        deleteButton.addEventListener("click", function () {
            deleteTask(task.id);
        });


        // ADD EVERYTHING

        taskItem.appendChild(checkButton);
        taskItem.appendChild(taskContent);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

    });

}


// ===============================
// COMPLETE / UNCOMPLETE TASK
// ===============================

function toggleTask(id) {

    tasks = tasks.map(function (task) {

        if (task.id === id) {

            return {
                ...task,
                completed: !task.completed
            };

        }

        return task;

    });

    saveTasks();

    displayTasks();
}


// ===============================
// DELETE TASK
// ===============================

function deleteTask(id) {

    tasks = tasks.filter(function (task) {
        return task.id !== id;
    });

    saveTasks();

    displayTasks();
}


// ===============================
// SAVE TASKS
// ===============================

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}


// ===============================
// LOAD TASKS
// ===============================

displayTasks();
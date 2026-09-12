```javascript
// ===============================
// PROGRESS
// ===============================
```
const tasks =
    JSON.parse(localStorage.getItem("tasks")) || [];

const notes =
    JSON.parse(localStorage.getItem("notes")) || [];


const totalTasks =
    document.getElementById("totalTasks");

const completedTasks =
    document.getElementById("completedTasks");

const totalNotes =
    document.getElementById("totalNotes");

const taskProgress =
    document.getElementById("taskProgress");


totalTasks.textContent = tasks.length;

completedTasks.textContent =
    tasks.filter(task => task.completed).length;

totalNotes.textContent = notes.length;


let percentage = 0;


if (tasks.length > 0) {

    const completed =
        tasks.filter(task => task.completed).length;

    percentage =
        Math.round((completed / tasks.length) * 100);

}


taskProgress.textContent =
    `${percentage}%`;


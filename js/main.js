
document.addEventListener("DOMContentLoaded", function () {

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    const taskCount = document.getElementById("taskCount");
    const completedCount = document.getElementById("completedCount");
    const noteCount = document.getElementById("noteCount");
    const dashboardTasks = document.getElementById("dashboardTasks");

    if (taskCount) {
        taskCount.textContent = tasks.length;
    }

    if (noteCount) {
        noteCount.textContent = notes.length;
    }

    if (completedCount) {
        completedCount.textContent =
            tasks.filter(task => task.completed).length;
    }

    if (dashboardTasks) {

        if (tasks.length === 0) {

            dashboardTasks.innerHTML = `
                <p class="empty-message">
                    No tasks added yet.
                </p>
            `;

        } else {

            dashboardTasks.innerHTML = tasks
                .slice(0, 4)
                .map(task => `

                    <div class="task-row ${task.completed ? "completed" : ""}">

                        <div class="task-check">

                            ${
                                task.completed
                                ? '<i class="ri-check-line"></i>'
                                : ''
                            }

                        </div>

                        <div>

                            <strong>${task.title}</strong>

                            <span>${task.subject}</span>

                        </div>

                    </div>

                `)
                .join("");

        }

    }

});



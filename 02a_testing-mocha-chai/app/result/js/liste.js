/**
 * Initialize the page. Will load all tasks from the local storage and show them.
 */
function initialize() {
    console.debug("Initializing list page")
    showTasks(loadStoredTasks());
}

/**
 * Display the given tasks in the task list.
 *
 * @param tasks The tasks to show in the task list.
 */
function showTasks(tasks) {
    if (tasks) {
        for (var task of tasks) {
            var taskHtmlContent = `
            <div class="list-task-checkbox">
                <img src="img/unchecked-box.png" onclick="deleteTask('${task.id}')"/>
            </div>
            <div class="list-task-description">
                <p class="list-task-title">${task.title}</p>
                <p class="list-task-notes">${task.notes}</p>
            </div>
            <div class="list-task-due">
                <img src="img/faelligkeit.svg"/>
                <p>${formatDate(new Date(task.due))}</p>
            </div>
            <div class="list-task-responsible">
                <img src="img/verantwortlich.svg"/>
                <p>${task.responsible}</p>
            </div>
            <div class="list-task-edit">
                <a href="anlage.html?id=${task.id}"><img src="img/bearbeiten.svg"/></a>
            </div>
        `;

            var taskLi = document.createElement("li");
            taskLi.innerHTML = taskHtmlContent;
            appendById("tasks", taskLi);
        }
    } else {
        console.error("No tasks provided to be shown")
    }
}

/**
 * Safely append a new element to an element identified by its ID.
 * @param id The ID of the parent element.
 * @param elementToAppend The new element to append.
 */
function appendById(id, elementToAppend) {
    var element = document.getElementById(id);
    if (element) {
        element.append(elementToAppend);
    } else {
        console.error(`Element with ID not found: ${id}`);
    }
}

/**
 * Delete the task with the given ID.
 *
 * @param id The ID of the task to delete.
 */
function deleteTask(id) {
    console.debug(`Attempting to delete task with ID: ${id}`);

    var tasks = loadStoredTasks();
    if (tasks && id) {
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].id === id) {
                tasks.splice(i, 1);
                storeTasks(tasks);
                cleanTaskList();
                showTasks(tasks);

                console.info(`Deleted task with ID: ${id}`);

                break;
            }
        }
    } else {
        console.error("Invalid arguments to remove task");
    }
}

/**
 * Remove all tasks from the task list.
 */
function cleanTaskList() {

    var taskList = document.getElementById("tasks");
    if (taskList) {
        taskList.innerHTML = "";
        console.debug("Cleared task list");
    } else {
        console.error("Task list not found");
    }
}

/**
 * Properly format a date to be displayed.
 *
 * @param date The date to format.
 * @returns {string} The formatted date.
 */
function formatDate(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    var formattedDate = `${day}.${month}.${year}`;
    console.debug(`Formatted date is: ${formattedDate}`);
    return formattedDate;
}

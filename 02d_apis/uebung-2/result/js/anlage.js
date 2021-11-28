/**
 * Initialize the page. Will provide a form to create a new task, if no ID is provided as query parameter. If
 * an ID is provided as query parameter, an edit form will be shown.
 */
function initialize() {
    console.debug("Initializing create and edit page")

    var taskId = new URLSearchParams(location.search).get("id");
    if (taskId) {
        console.debug(`Page loaded in edit mode for task with ID: ${taskId}`);
        getTaskById(taskId)
            .then(response => response.json())
            .then(task => {
                setValueById("title", task.title);
                setValueById("notes", task.notes);
                setValueById("due", task.due);
                setValueById("responsible", task.responsible);

                setTextContentById("page-title", "Aufgabe bearbeiten");
                setTextContentById("save-btn", "Speichern");
                setAttributeById("save-btn", "onclick", `save('${taskId}')`);
            });
    } else {
        console.debug("Page loaded in create mode");
    }
}

/**
 * Safely set the value of an element identified by its ID.
 *
 * @param id The ID of the element to search for.
 * @param value The value to set.
 */
function setValueById(id, value) {
    var element = document.getElementById(id);
    if (element) {
        element.value = value;
    } else {
        console.error(`Element with ID does not exist: ${id}`);
    }
}

/**
 * Safely set the text content of an element identified by its ID.
 *
 * @param id The ID of the element to search for.
 * @param value The text content to set.
 */
function setTextContentById(id, value) {
    var element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    } else {
        console.error(`Element with ID does not exist: ${id}`);
    }
}

/**
 * Safely set an attribute value of an element identified by its ID.
 *
 * @param id The ID of the element to search for.
 * @param attributeName The name of the attribute to set.
 * @param attributeValue The value of the attribute to set.
 */
function setAttributeById(id, attributeName, attributeValue) {
    var element = document.getElementById(id);
    if (element) {
        element.setAttribute(attributeName, attributeValue);
    } else {
        console.error(`Element with ID does not exist: ${id}`);
    }
}

/**
 * Searches for a task contained in the local storage.
 *
 * @param id The ID of the task to search for.
 * @returns {any|undefined} The task, if it was found.
 */
function getTaskById(id) {
    return fetch(`https://dhbw-web-todo.azurewebsites.net/api/tasks/${id}`, {
        headers: {
            'Accept': 'application/json',
            'X-Api-key': 'ahirsch'
        }
    });
}

/**
 * Save the data contained in the form.
 *
 * @param id The ID of the task, if a task should be updated.
 */
function save(id) {
    var task = createTaskFromInput();

    if (id) {
        task.id = id;
        updateExistingTask(task);
    } else {
        createNewTask(task);
    }
}

function createNewTask(task) {
    console.debug("Trying to create new task");

    fetch(`https://dhbw-web-todo.azurewebsites.net/api/tasks`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'X-Api-key': 'ahirsch'
        },
        body: JSON.stringify(task)
    })
        .then(response => {
                console.info(`Creating new task finished with status: ${response.status}`)
                location.href = "liste.html";
            }
        )
        .catch(error => console.error(`Creating new task failed: ${error}`));
}

function updateExistingTask(task) {
    console.debug("Trying to create new task");

    fetch(`https://dhbw-web-todo.azurewebsites.net/api/tasks/${task.id}`, {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'X-Api-key': 'ahirsch'
        },
        body: JSON.stringify(task)
    })
        .then(response => {
                console.info(`Updating existing task finished with status: ${response.status}`)
                location.href = "liste.html";
            }
        )
        .catch(error => console.error(`Updating existing task failed: ${error}`));
}

/**
 * Replace a task with a specific ID in a task array.
 *
 * @param tasks The array in which the task should be replaced.
 * @param idToReplace The ID of the task to replace.
 * @param updatedTask The task object replacing the task with the given ID.
 */
function replaceTask(tasks, idToReplace, updatedTask) {
    if (tasks && idToReplace && updatedTask) {
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].id === idToReplace) {
                tasks[i] = updatedTask
                return;
            }
        }
    } else {
        console.error("Invalid arguments to replace task");
    }
    console.error(`Element with ID not known: ${idToReplace}`);
}

/**
 * Create a task object from the values of the form input fields related to a task.
 *
 * @returns {{notes: (*|undefined), due: (*|undefined), responsible: (*|undefined), id: string, title: (*|undefined)}} Task object.
 */
function createTaskFromInput() {
    var title = getInputValueById("title");
    var notes = getInputValueById("notes");
    var responsible = getInputValueById("responsible");
    var due = getInputValueById("due");

    return {
        title: title,
        notes: notes,
        due: due,
        responsible: responsible
    }
}

/**
 * Search for an HTML input element by its ID and return the value.
 *
 * @param id The ID of the HTML input element.
 * @returns {undefined|*} The value of the HTML input element, if one with the given ID exists.
 */
function getInputValueById(id) {
    if (id) {
        var input = document.getElementById(id);
        if (input) {
            return input.value;
        } else {
            console.error(`Input with ID not found: ${id}`);
            return undefined;
        }
    }

    console.error("No ID provided");
    return undefined;
}

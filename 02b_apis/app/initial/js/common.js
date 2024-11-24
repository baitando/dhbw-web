/**
 * Load stored tasks from local storage, if some are stored there.
 *
 * @returns {*[]|any} Stored tasks from local storage or empty array, if no tasks were present.
 */
function loadStoredTasks() {
    return fetch(`https://dhbw-web-todo.azurewebsites.net/api/tasks`, {
        headers: {
            'Accept': 'application/json',
            'X-Api-key': 'ahirsch'
        }
    });
}

/**
 * Store tasks in the local storage.
 *
 * @param tasks Tasks to store.
 */
function storeTasks(tasks) {
    if (tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.debug(`Count of stored tasks: ${tasks.length}`);
    } else {
        console.error("No tasks to store");
    }
}

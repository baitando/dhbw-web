/**
 * Load stored tasks from local storage, if some are stored there.
 *
 * @returns {*[]|any} Stored tasks from local storage or empty array, if no tasks were present.
 */
function loadStoredTasks() {
    var storedTasksJson = localStorage.getItem("tasks");
    if (storedTasksJson) {
        var tasks = JSON.parse(storedTasksJson);
        console.debug(`Count of loaded tasks: ${tasks.length}`);
        return tasks;
    }

    return [];
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

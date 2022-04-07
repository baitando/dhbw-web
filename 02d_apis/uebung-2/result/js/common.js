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

import {Task} from "../entities/Task";
import * as azurestorage from "azure-storage";
import TableService = azurestorage.services.table.TableService;
import entityGenerator = azurestorage.services.table.TableUtilities.entityGenerator;

const azure = require('azure-storage');

export class TaskRepository {

    private tableService: TableService;
    private entGen: any;

    constructor() {
        this.tableService = azure.createTableService();
        this.entGen = azure.TableUtilities.entityGenerator;
    }

    addTask(task: Task, owner: string): Promise<string> {

        const persistentTask = {
            PartitionKey: this.entGen.String(owner),
            RowKey: this.entGen.String(task.id),
            owner: this.entGen.String(owner),
            id: this.entGen.String(task.id),
            title: this.entGen.String(task.title),
            notes: this.entGen.String(task.notes),
            due: this.entGen.String(task.due),
            responsible: this.entGen.String(task.responsible),
        };

        return new Promise((resolve, reject) => {
            this.tableService.insertEntity('tasks', persistentTask, function (error, result, response) {
                    if (!error) {
                        resolve(task.id);
                    }
                    reject(error);
                }
            )
        });
    }

    updateTask(task: Task, owner: string): Promise<void> {

        const persistentTask = {
            PartitionKey: this.entGen.String(owner),
            RowKey: this.entGen.String(task.id),
            owner: this.entGen.String(owner),
            id: this.entGen.String(task.id),
            title: this.entGen.String(task.title),
            notes: this.entGen.String(task.notes),
            due: this.entGen.String(task.due),
            responsible: this.entGen.String(task.responsible),
        };

        return new Promise((resolve, reject) => {
            this.tableService.mergeEntity('tasks', persistentTask, function (error, result, response) {
                    if (!error) {
                        resolve();
                    }
                    reject(error);
                }
            )
        });
    }

    getTaskByOwnerAndId(owner: string, id: string): Promise<Task> {
        return new Promise(function (resolve, reject) {
            try {
                const tableService = azure.createTableService();
                const query = new azure.TableQuery().top(1).where('RowKey eq ? and owner eq ?', id, owner);
                tableService.queryEntities('tasks', query, null, function (error, result, response) {
                    if (!error) {
                        const entry = result.entries[0];
                        if (entry) {
                            const task: Task = {
                                id: entry.id._,
                                title: entry.title._,
                                notes: entry.notes._,
                                due: entry.due._,
                                responsible: entry.responsible._
                            }

                            resolve(task);
                        } else {
                            resolve(null);
                        }
                    } else {
                        reject(error);
                    }
                });
            } catch (e) {
                reject(e);
            }
        });
    }

    getAllTasks(owner: string): Promise<Task[]> {
        return new Promise(function (resolve, reject) {
            try {
                const tableService = azure.createTableService();
                const query = new azure.TableQuery().where('PartitionKey eq ? and owner eq ?', owner, owner);
                tableService.queryEntities('tasks', query, null, function (error, result, response) {
                    if (!error) {
                        const tasks: Task[] = [];
                        result.entries.forEach(entry => {
                                tasks.push(
                                    {
                                        id: entry.id._,
                                        title: entry.title._,
                                        notes: entry.notes._,
                                        due: entry.due._,
                                        responsible: entry.responsible._
                                    }
                                )
                            }
                        );
                        resolve(tasks);
                    } else {
                        reject(error);
                    }
                });
            } catch (e) {
                reject(e);
            }
        });
    }

    deleteAllTasks(owner: string): Promise<void> {
        return new Promise(function (resolve, reject) {
            try {
                const tableService = azure.createTableService();
                const query = new azure.TableQuery().where('PartitionKey eq ? and owner eq ?', owner, owner);
                tableService.queryEntities('tasks', query, null, function (error, result, response) {
                    if (!error) {
                        result.entries.forEach(entry => {
                                tableService.deleteEntity('tasks', entry, function (error, response) {
                                    if (error) {
                                        reject(error);
                                    }
                                })
                            }
                        );
                        resolve();
                    } else {
                        reject(error);
                    }
                });
            } catch (e) {
                reject(e);
            }
        });
    }

    deleteTaskByOwnerAndId(owner: string, id: string): Promise<void> {
        return new Promise(function (resolve, reject) {
            try {
                const tableService = azure.createTableService();
                const query = new azure.TableQuery().where('RowKey eq ? and owner eq ?', id, owner);
                tableService.queryEntities('tasks', query, null, function (error, result, response) {
                    if (!error) {
                        const entry = result.entries[0];
                        if (entry) {
                            tableService.deleteEntity('tasks', entry, function (error, response) {
                                if (error) {
                                    reject(error);
                                }
                            });
                            resolve();
                        }
                    } else {
                        reject(error);
                    }
                });
            } catch (e) {
                reject(e);
            }
        });
    }
}

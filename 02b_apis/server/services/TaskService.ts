import {v4 as uuidv4} from 'uuid';
import {TaskRepository} from "../repositories/TaskRepository";
import {Task} from "../entities/Task";

export class TaskService {

    private repository: TaskRepository;

    constructor() {
        this.repository = new TaskRepository();
    }


    registerApp(): any {
        return {
            apiKey: uuidv4()
        };
    }

    addTask(task: Task, owner: string): Promise<string> {
        task.id = uuidv4();
        return this.repository.addTask(task, owner).then();
    }

    updateTask(task: Task, owner: string): Promise<void> {
        return this.repository.updateTask(task, owner);
    }

    getTasks(owner: string): Promise<Task[]> {
        return this.repository.getAllTasks(owner);
    }

    getTaskByOwnerAndId(owner: string, id: string): Promise<Task> {
        return this.repository.getTaskByOwnerAndId(owner, id)
    }

    deleteAllTasks(owner: string): Promise<void> {
        return this.repository.deleteAllTasks(owner);
    }

    deleteTaskByOwnerAndId(owner: string, id: string): Promise<void> {
        return this.repository.deleteTaskByOwnerAndId(owner, id);
    }
}

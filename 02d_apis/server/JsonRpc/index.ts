import {AzureFunction, Context, HttpRequest} from "@azure/functions"
import {TaskService} from "../Services/TaskService";
import {JSONRPCServer} from "json-rpc-2.0";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const server = new JSONRPCServer();

    server.addMethod("registerApp", () => registerApp());
    server.addMethod("addTask", params => addTask(params["task"], params["owner"]));
    server.addMethod("getAllTasks", params => getAllTasks(params["owner"]));
    server.addMethod("getTaskById", params => getTaskById(params["owner"], params["id"]));
    server.addMethod("deleteAllTasks", params => deleteAllTasks(params["owner"]));
    server.addMethod("deleteTaskById", params => deleteTaskById(params["owner"], params["id"]));
    server.addMethod("updateTaskById", params => updateTask(params["task"], params["owner"]));
    server.addMethod("echo", params => params["text"]);

    const response = await server.receiveJSON(JSON.stringify(req.body));
    context.res = {
        status: "200",
        body: response
    }
};

async function registerApp() {
    const service = new TaskService();
    return service.registerApp();
}

async function addTask(task: any, owner: any) {
    const service = new TaskService();
    return service.addTask(task, owner);
}

async function getAllTasks(owner: any) {
    const service = new TaskService();
    return service.getTasks(owner);
}

async function getTaskById(owner: any, id: any) {
    const service = new TaskService();
    return service.getTaskByOwnerAndId(owner, id);
}

async function deleteAllTasks(owner: any) {
    const service = new TaskService();
    return service.deleteAllTasks(owner);
}

async function deleteTaskById(owner: any, id: any) {
    const service = new TaskService();
    return service.deleteTaskByOwnerAndId(owner, id);
}

async function updateTask(task: any, owner: any) {
    const service = new TaskService();
    return service.updateTask(task, owner);
}

export default httpTrigger;

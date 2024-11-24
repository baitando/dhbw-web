import {AzureFunction, Context, HttpRequest} from "@azure/functions"
import {TaskService} from "../Services/TaskService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const service = new TaskService();
    const task = req.body;
    task.id = req.params['id'];
    await service.updateTask(task, req.headers['x-api-key']);

    context.res = {
        status: 204
    };
};

export default httpTrigger;

import {AzureFunction, Context, HttpRequest} from "@azure/functions"
import {TaskService} from "../Services/TaskService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const service = new TaskService();
    const id = await service.addTask(req.body, req.headers['x-api-key']);

    context.res = {
        status: 201,
        headers: {
            'Location': 'https://dhbw-web-todo.azurewebsites.net/api/tasks/' + id
        }
    };
};

export default httpTrigger;

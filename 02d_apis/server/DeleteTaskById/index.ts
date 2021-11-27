import {AzureFunction, Context, HttpRequest} from "@azure/functions"
import {TaskService} from "../Services/TaskService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const service = new TaskService();

    if (req.params && req.params.id && req.headers['x-api-key']) {
        await service.deleteTaskByOwnerAndId(req.headers['x-api-key'], req.params.id);

        context.res = {
            status: 204
        };
    } else {
        context.res = {
            status: 400
        };
    }
};

export default httpTrigger;

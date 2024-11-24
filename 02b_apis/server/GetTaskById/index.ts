import {AzureFunction, Context, HttpRequest} from "@azure/functions"
import {TaskService} from "../Services/TaskService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const service = new TaskService();

    if (req.params && req.params.id && req.headers['x-api-key']) {
        const result = await service.getTaskByOwnerAndId(req.headers['x-api-key'], req.params.id);
        if (result) {
            context.res = {
                status: 200,
                body: result
            };
        } else {
            context.res = {
                status: 404
            }
        }
    } else {
        context.res = {
            status: 400
        };
    }

};

export default httpTrigger;

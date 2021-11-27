import {AzureFunction, Context, HttpRequest} from "@azure/functions"
import {TaskService} from "../Services/TaskService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const service = new TaskService();

    context.res = {
        body: {
            items: await service.getTasks(req.headers['x-api-key'])
        }
    };

};

export default httpTrigger;

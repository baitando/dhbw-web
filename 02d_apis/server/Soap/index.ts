import {AzureFunction, Context, HttpRequest} from "@azure/functions"
import {TaskService} from "../services/TaskService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const soap = require('soap');
    const express = require('express');
    const axios = require('axios');

    const xml = require('fs').readFileSync('./Soap/todo.wsdl', 'utf8');
    const port = 28010;
    const path = "/soap";

    if (req.url.endsWith("?wsdl")) {
        console.log("Asking for WSDL");
        context.res = {
            body: xml,
            headers: {
                "Content-Type": "application/xml"
            }
        }
    } else {
        console.log("Asking for data");
        const serviceObject = {
            TodoService: {
                TodoPort: {
                    GetAllTasks: async function (args) {
                        return {
                            task: await getAllTasks(args.owner)
                        };
                    },
                }
            }
        };

        const app = express();
        const server = await app.listen(port, function () {
            console.log('Listening on port ' + port);
            soap.listen(app, "/soap", serviceObject, xml);
        });

        const response = await axios.post(`http://localhost:${port}${path}`, req.body);
        context.res = {
            status: response.status,
            body: response.data,
            headers: {
                "Content-Type": "application/xml"
            }
        }
        server.close(() => {
            console.log("Server closed");
        });
    }
};

async function getAllTasks(owner: any) {
    const service = new TaskService();
    return service.getTasks(owner);
}

export default httpTrigger;

import { app } from './app';
import serverless from "serverless-http";

const handler = serverless(app);
module.exports.handler = async (event: Object, context: Object) => {
    return await handler(event, context);
}

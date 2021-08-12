import { UncaughtEventsHandler }    from './utils/serverUtils';
UncaughtEventsHandler.registerAllHandlers();
import dotenv                       from 'dotenv';
dotenv.config();
import app                          from './app';
import { RuntimeConfigHelper }      from './utils/serverUtils';
import {  createConnection }        from "typeorm";

RuntimeConfigHelper.setProcessName();

const port = RuntimeConfigHelper.getPort();
const mode = RuntimeConfigHelper.getRunMode();


async function runServer() {
    await createConnection();
    const server = app.listen(port, () => {
        console.log(`App is running at http://localhost:${port} in ${mode} mode`);
    });
}

runServer();
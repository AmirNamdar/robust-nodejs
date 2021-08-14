import { UncaughtEventsHandler }    from './utils/serverUtils';
UncaughtEventsHandler.registerAllHandlers();
import { Config }                   from './utils/config/Config';
Config.initialize();
import app                          from './app';
import { RuntimeConfigHelper }      from './utils/serverUtils';
import { createConnection, ConnectionOptions }         from "typeorm";

RuntimeConfigHelper.setProcessName();
const port = RuntimeConfigHelper.getPort();
const mode = RuntimeConfigHelper.getRunMode();


async function runServer() {
    const dalConfig = Config.getDALConfig() as ConnectionOptions;
    await createConnection(dalConfig);
    const server = app.listen(port, () => {
        console.log(`App is running at http://localhost:${port} in ${mode} mode`);
    });
}

runServer();
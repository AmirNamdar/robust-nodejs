import dotenv from 'dotenv';
dotenv.config();
import app                      from './app';
import { RuntimeConfigHelper }  from './utils/serverUtils';

RuntimeConfigHelper.setProcessName();

const port = RuntimeConfigHelper.getPort();
const mode = RuntimeConfigHelper.getRunMode();

const server = app.listen(port, () => {
    console.log(`App is running at http://localhost:${port} in ${mode} mode`);
});

export default server;
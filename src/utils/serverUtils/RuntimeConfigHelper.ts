import { Config }       from '../config/Config';
import { ServerConfig } from '../config/ConfigBuilder';

export class RuntimeConfigHelper {
    
    private static config: ServerConfig = Config.getServerConfig();
    
    public static setProcessName() {
        const procName = RuntimeConfigHelper.config.procName || 'my_robust_server';
        process.title = procName;
    }

    public static getPort() {
        const listenPort = RuntimeConfigHelper.config.listenPort || 'my_robust_server';
        return listenPort || 3000;
    }

    public static getRunMode() {
        const mode = process.env.NODE_ENV;
        if (!mode) {
            console.error(`ROBUST_SERVER_INIT_ABORT - NODE_ENV value was not supplied`);
            process.exit();
        }

        const validRunModes = ['PROD', 'DEV'];
        if (!validRunModes.includes(mode)) {
            console.error(`ROBUST_SERVER_INIT_ABORT - invalid NODE_ENV value supplied: ${mode}. Allowed Values: ${validRunModes.toString()}`);
            process.exit();
        }
        return mode;
    }
}
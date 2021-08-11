import process from 'process';

export class RuntimeConfigHelper {
    public static setProcessName() {
        const procName = process.env.PROC_NAME || 'my_robust_server';
        process.title = procName;
    }

    public static getPort() {
        return process.env.PORT || 3000;
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
import dotenv                               from 'dotenv';
dotenv.config();
import { RuntimeConfigHelper }              from "../serverUtils";
import { ConfigBuilder, RuntimeConfig }     from './ConfigBuilder';
import fs                                   from 'fs';


export class Config {
    
    public static CONTEXT_SERVER    = 'server';
    public static CONTEXT_DAL       = 'dal';
    
    public static config: RuntimeConfig;

    public static initialize(): RuntimeConfig {
        const serverRunMode     = RuntimeConfigHelper.getRunMode();
        const runtimeConfigRaw  = Config.loadConfigFile(serverRunMode);
        const runtimeConfig     = Config.buildFromRawObject(runtimeConfigRaw);
        Config.config = runtimeConfig;

        return runtimeConfig;
    }
    
    private static buildFromRawObject(runtimeConfigRaw: any): RuntimeConfig {
        return ConfigBuilder.build(runtimeConfigRaw);
    }

    public static getConfig() {
        if(!Config.config) {
            Config.initialize();
        }

        return Config.config;
    }

    public static getServerConfig() {
        if (!Config.config) {
            Config.initialize();
        }
        
        return Config.config.Server;
    }

    public static getDALConfig() {
        if (!Config.config) {
            Config.initialize();
        }

        return Config.config.DAL;
    }

    private static loadConfigFile(serverRunMode: string) {
        'config/runtime/DEV.json'
        const configFilePath = `config/runtime/${serverRunMode}.json`;
        Config.validateConfigFileExists(configFilePath);
        const runtimeConfigObject   = Config.readConfigFile(configFilePath);
        // TODO load as config object
        // TODO add validation on config object for it to validate itself

        return runtimeConfigObject;
    }

    private static readConfigFile(configFilePath: string) {
        const fileContents          = fs.readFileSync(configFilePath, 'utf8');
        const runtimeConfigObject   = JSON.parse(fileContents);

        return runtimeConfigObject;
    }

    private static validateConfigFileExists(configFilePath: string) {
        if (!fs.existsSync(configFilePath)) {
            throw new Error(`Configuration file: ${configFilePath} does not exist`);
        }
    }
}
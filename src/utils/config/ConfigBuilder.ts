export class RuntimeConfig {
    public Server:  ServerConfig;
    public DAL: DALConfig;
}

export class ServerConfig {
    listenPort: number;
    procName:   string;
}

export interface DALConfig {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: Array<string>;
    synchronize: boolean;
    logging: string|boolean;
}

export class ConfigBuilder {
    
    private configParsers: Array<any> = [];


    public static build(runtimeConfigRaw: any) {
        const serverConfig      = new ServerConfig();
        serverConfig.listenPort = runtimeConfigRaw.server.listen_port;
        serverConfig.procName   = runtimeConfigRaw.server.proc_name;

        const dalConfig: DALConfig         = {
            type        : runtimeConfigRaw.dal.type,
            host        : runtimeConfigRaw.dal.host,
            port        : runtimeConfigRaw.dal.port,
            username    : runtimeConfigRaw.dal.username,
            password    : runtimeConfigRaw.dal.password,
            database    : runtimeConfigRaw.dal.database,
            entities    : runtimeConfigRaw.dal.entities,
            synchronize : runtimeConfigRaw.dal.synchronize,
            logging     : runtimeConfigRaw.dal.logging
        };


        const runtimeConfig     = new RuntimeConfig();
        runtimeConfig.Server    = serverConfig;
        runtimeConfig.DAL       = dalConfig;

        return runtimeConfig;

    }

    
}
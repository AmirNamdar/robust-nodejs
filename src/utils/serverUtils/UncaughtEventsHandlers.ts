export class UncaughtEventsHandler {
    
    public static registerAllHandlers() {
        UncaughtEventsHandler.registerUncaughtExceptionHandler();
        UncaughtEventsHandler.registerUncaughtRejectionHandler();
    }

    public static registerUncaughtExceptionHandler() {
        process.on('uncaughtException', (err: Error, origin: string) => {
            console.error(`⚠️ Caught unhandled exception:\n${err}\nException origin: ${origin}`
            );
        });
    }

    public static registerUncaughtRejectionHandler() {
        process.on('unhandledRejection', (reason, promise) => {
            console.log('⚠️ Caught unhandled Rejection at:', promise, 'reason:', reason);
        });
    }

}
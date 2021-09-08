import Runnable from "./interfaces/runnable";
import { IConfiguration, Configuration } from "./config/configuration";
import Logger from "./tools/logger";

export default class Lss implements Runnable {
    private config: Configuration;
    private content: Object;
    private logger : Logger;

    constructor(config: IConfiguration, content : Object) {
        this.config = new Configuration(config);
        this.content = content;
        this.logger = new Logger();
    }

    run(): Promise<Object> {
        return new Promise((resolve, reject) => {
            this.logger.start();            
            this.logger.end();

            resolve({
                success: true,
                config: this.config,
            });
        });
    }
}

module.exports = Lss;

import Runnable from "./interfaces/runnable";
import { IConfiguration } from "./config/configuration";
import Logger from "./tools/logger";
import IHandler, { Handler } from "./tools/handler";
import { Compiler, ACompiler } from "./tools/compiler";
import { AParser, Parser } from "./tools/parser";
import { NumberedList } from "./interfaces/datastructure";

export default class Lss implements Runnable {
    private config: IConfiguration;
    private content: NumberedList;
    private logger: Logger;

    private parser: AParser;
    private handler: IHandler;
    private compiler: ACompiler;

    constructor(config: IConfiguration, content: NumberedList) {
        this.config = config;
        this.content = content;

        this.logger = new Logger();
        this.handler = new Handler();

        this.parser = new Parser(this.logger, this.handler);
        this.compiler = new Compiler(this.logger, this.handler);
    }

    run(): Promise<Object> {
        return new Promise((resolve, reject) => {
            
            this.logger.start();
            
            console.log(typeof this.content);
            
            //this.parser.parse(this.content);
            this.compiler.compile();
            this.logger.end();

            resolve({
                success: true,
                config: this.config,
            });
        });
    }
}

module.exports = Lss;

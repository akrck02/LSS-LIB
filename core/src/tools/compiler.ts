import IHandler from "./handler";
import Logger, { LogActor, LogStatus } from "./logger";

export abstract class ACompiler {

    protected logger : Logger;
    protected handler : IHandler;

    constructor(logger : Logger, handler : IHandler){
        this.logger = logger;
        this.handler = handler;
    }

    abstract compile() : string;
}

export class Compiler extends ACompiler {


    constructor (logger : Logger, handler : IHandler) {
        super(logger, handler);
    }

    compile() : string {

        this.logger.log(LogActor.COMPILER, LogStatus.RUN, "Starting.");



        this.logger.log(LogActor.COMPILER, LogStatus.RUN, "Done.");
        return "";
    
    }
}
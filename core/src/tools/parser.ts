import Compilable from "../interfaces/compilable";
import { NumberedList } from "../interfaces/datastructure";
import IHandler from "./handler";
import Logger, { LogActor, LogStatus } from "./logger";

export abstract class AParser {
    protected logger: Logger;
    protected handler: IHandler;

    constructor(logger: Logger, handler: IHandler) {
        this.logger = logger;
        this.handler = handler;
    }

    abstract parse(subject: NumberedList): Array<Compilable>;
}

export class Parser extends AParser {
    parse(subject: NumberedList): Array<Compilable> {
        this.logger.log(LogActor.PARSER, LogStatus.RUN, "Starting.");

        for (const key in subject) {
            const object = subject[key];

            console.log(object);
        }

        this.logger.log(LogActor.PARSER, LogStatus.RUN, "Done.");
        return [];
    }
}

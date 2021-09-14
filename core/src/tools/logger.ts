
export enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    OFF = 4,
}

export enum LogStatus {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
    FAIL = "FAIL",
    TEST = "TEST",
    PARSE = "PARSE",
    GENERATE = "GENERATE",
    RUN = "RUN",
    COMPARE = "COMPARE",
}

export enum LogActor {
    LSS = "LSS",
    PARSER = "PARSER",
    COMPILER = "COMPILER",
    LOGGER = "LOGGER", // this is the logger itself
    API = "API",
    CONFIG = "CONFIG",
}

export default class Logger {

    private startD : Date; 

    constructor() {
        this.startD = new Date();
    }

    start() {
        console.log("\n");
        console.log("##########################################");
        console.log("   LSS Library Core                v1.0   ");
        console.log("##########################################");

        this.log(LogActor.LSS, LogStatus.SUCCESS, "Logger started.");
        this.startD = new Date();
    }

    getDifference(endD : Date) {
        let diff = (endD.getTime() - this.startD.getTime());

        let s = Math.floor(diff / 1000);
        let ms = diff % 1000;
     
        return `${s.toString().padStart(2, "0")}.${ms.toString().padStart(2, "0")}`;
    }

    log(actor: LogActor, status :LogStatus , message : string) {
        const diff = this.getDifference(new Date());
        console.log(`[${actor}][${status}][${diff}s]: ${message}`);
    }

    end() {
        this.log(LogActor.LSS,LogStatus.SUCCESS, "Done.");
    }
}
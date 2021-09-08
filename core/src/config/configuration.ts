import Compilable from "../interfaces/compilable";

export interface IConfiguration {
    minify : boolean;
    log : boolean;
};

export class Configuration {

    private minify : boolean;
    private log : boolean;
    
    private cache: {[key:string] : string};
    private parsed: {[key:string] : Compilable};


    constructor(config : IConfiguration) {
        this.minify = config.minify;
        this.log = config.log;
        this.cache = {};
        this.parsed = {};
    }
}





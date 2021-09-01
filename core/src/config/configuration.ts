export default class Configuration {

    private input : string;
    private output : string;

    private minify : boolean;
    private log : boolean;
    
    private cache: {[key:string]: string};
    private parsed: Compilable;


    constructor(input : string, output : string, minify : boolean, log : boolean) {
        this.input = input;
        this.output = output;
        this.minify = minify;
        this.log = log;
        this.cache = {};
        this.parsed = {};
    }


}
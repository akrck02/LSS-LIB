import Compilable from "../interfaces/compilable";

export default interface IHandler {
    cache: {[key:string] : string};
    parsed: {[key:string] : Compilable};

    getCached(uid : string) : string;
    getParsed(uid : string) : Compilable;
    
    getParsedData() : {[key:string] : Compilable};

    setCached(uid : string, result : string) : void;
    setParsed(uid : string, object : Compilable) : void;
}

export class Handler implements IHandler {

    cache: {[key:string] : string};
    parsed: {[key:string] : Compilable};

    constructor() { 
        this.cache = {};
        this.parsed = {};
    }

    getCached(uid : string) : string {
        return this.cache[uid];
    }
    getParsed(uid : string) : Compilable {
        return this.parsed[uid];
    }

    getParsedData() : {[key:string] : Compilable} {
        return this.parsed;
    }
    
    setCached(uid : string, result : string) : void {
        this.cache[uid] = result; 
    }
    setParsed(uid : string, object : Compilable) : void {
        this.parsed[uid] = object;
    }

}
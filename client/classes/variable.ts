
import variable from "../interfaces/variable.ts";
import { FILE_TYPES } from "../data/lssContext.ts";
import { generateUID } from "../data/cache.ts";
import * as logger from "../tools/logger.ts"; 

export default class Variable implements variable {

    uid: string;
    fileType: FILE_TYPES;
    name: string;
    value: string;
    
    constructor(name: string, value: string){
        this.fileType = FILE_TYPES.VARIABLE;
        this.uid = generateUID(this);
        this.name = name;
        this.value = value;
        logger.log('new Variable', this.name ,' : ', this.value);
    }
    
    var(): string {
        return '--' + this.name;;
    }

    line(): string {
        return this.var() + " : " + this.value;
    }

    cssVar(): string {
        return "var(" + this.var() + ")";
    }

    compile(): string {

        let out = {
            fileType: this.fileType,
            uid: this.uid,
            name: this.name,
            value: this.value
        };

        return JSON.stringify(out);
    }

} 

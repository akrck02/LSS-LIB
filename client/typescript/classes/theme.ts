import theme from '../interfaces/theme.ts';
import { generateUID } from "../data/cache.ts";
import { FILE_TYPES } from '../data/lssContext.ts';
import * as logger from "../tools/logger.ts"; 

export default class Theme implements theme {
    
    fileType : FILE_TYPES;
    uid: string;
    name: string;
    variables: string[];

    constructor(name: string) {
        this.fileType = FILE_TYPES.THEME;
        this.uid = generateUID(this);
        this.name = name;
        this.variables = [];
        logger.log('New theme',this.name);
    }

    compile(): string {
        let out = {
            fileType: this.fileType,
            uid: this.uid,
            name: this.name,
            variables: this.variables
        };
        return JSON.stringify(out);
    }

    addVariable(variable: string) : void {
        this.variables.push(variable);
        this.variables = Array.from(new Set(this.variables));
    }

}
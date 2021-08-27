import style from "../interfaces/style.ts";
import { generateUID } from "../data/cache.ts";
import { FILE_TYPES } from "../data/lssContext.ts";
import * as logger from "../tools/logger.ts"; 

export default class Style implements style {

    fileType : FILE_TYPES;
    uid: string;
    name: string;
    value: string;

    constructor(name: string, value: string) {
        this.fileType = FILE_TYPES.STYLE;
        this.uid = generateUID(this);
        this.name = name;
        this.value = value;
        logger.log('New Style', this.name, ' : ', this.value);
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
import component from '../interfaces/component.ts';
import uiobject from '../interfaces/uiobject.ts';
import { generateUID } from "../data/cache.ts";
import { COMPONENT_TYPES, FILE_TYPES } from '../data/lssContext.ts';
import * as logger from "../tools/logger.ts"; 

export default class Component implements component {
    
    fileType: FILE_TYPES;
    uid: string;
    name: string;
    type: COMPONENT_TYPES;
    parent: string | undefined;
   
    styles : string [];
    actions : string [];
    variations : string [];
    variables : string [];

    constructor(uid: string, name: string, type: COMPONENT_TYPES) {
        this.fileType = FILE_TYPES.COMPONENT;
        this.uid = generateUID(this);
        this.name = name;
        this.type = type;
        this.styles = [];
        this.actions = [];
        this.variations = [];
        this.variables = [];  
        logger.log('New component', this.name);
    }

    compile() : string {
        let out = {
            fileType: this.fileType,
            uid : this.uid, 
            name : this.name,
            type : this.type,
            variables : this.variables,
            styles : this.styles,
            actions : this.actions,
            variations : this.variations
        };

        return JSON.stringify(out);
    }

    inherit(component: uiobject) : void {

    }

    setParent(parent: string) : void {
        this.parent = parent;
    }

}

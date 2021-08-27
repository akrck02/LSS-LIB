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

    constructor(name: string, type: COMPONENT_TYPES) {
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


    addVariable(variable: string) : void {
        this.variables.push(variable);
        this.variables = Array.from(new Set(this.variables));
    }

    addStyle(style: string) : void {
        this.styles.push(style);
        this.styles = Array.from(new Set(this.styles));
    }

    addVariation(variation: string) : void {
        this.variations.push(variation);
        this.variations = Array.from(new Set(this.variations));
    }

    addAction(action: string) : void {
        this.actions.push(action);
        this.actions = Array.from(new Set(this.actions));
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

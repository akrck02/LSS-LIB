import component from '../interfaces/component.ts';
import uiobject from '../interfaces/uiobject.ts';
import {  } from '../data/global.ts';
import { COMPONENT_TYPES } from '../data/lssContext.ts';

export default class Component implements component {
    
    uid: string;
    name: string;
    type: COMPONENT_TYPES;
    parent: uiobject | undefined;
   
    styles : StringMap;
    actions : UIMap;
    variations : UIMap;
    variables : VariableMap;

    constructor(uid: string, name: string, type: COMPONENT_TYPES) {
        this.uid = uid;
        this.name = name;
        this.type = type;
        this.styles = {};
        this.actions = {};
        this.variations = {};
        this.variables = {};  
    }

    compile() : string {
        
        let out = {
            uid : this.uid, 
            name : this.name,
            type : this.type,
            variables : {},
            styles : {},
        };



   
        


        return JSON.stringify(out);

    }

    compileCss() : string {
        return '';
    }

    inherit(component: uiobject) : void {

    }


    setParent(parent: uiobject) : void {
        this.parent = parent;
    }

    getVariables() : VariableMap {
        return this.variables;    
    }

    getStyles() : StyleMap {
        return this.styles;
    }

    getActions() : UIMap {
        return this.actions;
    }

    getVariations() : UIMap{
        return this.variations;
    }


}

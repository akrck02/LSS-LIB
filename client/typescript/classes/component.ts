import component from '../interfaces/component.ts';
import uiobject from '../interfaces/uiobject.ts';
import { StyleMap, VariableMap, UIMap } from '../data/global.ts';
import { FILE_TYPES } from '../data/lssContext.ts';

export default class Component implements component {
    
    uid: string;
    name: string;
    fileType: FILE_TYPES;
    parent: uiobject | undefined;
   
    styles : StyleMap;
    actions : UIMap;
    variations : UIMap;
    variables : VariableMap;

    constructor(uid: string, name: string, fileType: FILE_TYPES) {
        this.uid = uid;
        this.name = name;
        this.fileType = fileType;
        this.styles = {};
        this.actions = {};
        this.variations = {};
        this.variables = {};  
    }

    compile() : string{
        return '';
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

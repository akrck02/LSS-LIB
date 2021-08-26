import action from '../interfaces/action.ts';
import UIObject from '../interfaces/uiobject.ts';
import { UIMap, VariableMap, StyleMap  } from '../data/global.ts';
import { ACTION_TYPES } from '../data/lssContext.ts';

export default class Action implements action {
    uid: string;
    name: string;
    variables : VariableMap;
    styles : StyleMap;
    variations: UIMap;
    actions: UIMap;
    parent? : UIObject | undefined;
    type: ACTION_TYPES;
    subject : UIObject;

    constructor(uid: string, type: ACTION_TYPES, subject: UIObject, name: string) {
        this.uid = uid;
        this.subject = subject;
        this.name = name;
        this.type = type;
        this.variables = {};
        this.styles = {};
        this.variations = {};
        this.actions = {};
    }

    compile() : string {
        return "";
    }

    compileCss() : string {
        return "";
    }

    inherit(parent: UIObject) : void {

    }

    setParent(parent: UIObject) : void {
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

    getVariations() : UIMap {
        return this.variations;
    }
};

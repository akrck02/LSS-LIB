import { VariableMap, StyleMap, UIMap } from '../data/global.ts';

export default interface UIObject {
    uid: string;
    name: string;
    variables : VariableMap;
    styles : StyleMap;
    variations: UIMap;
    actions: UIMap;
    parent? : UIObject;

    compile() : string;
    compileCss() : string;
    inherit(parent: UIObject) : void;
    setParent(parent: UIObject) : void;

    getVariables() : VariableMap;
    getStyles() : StyleMap;
    getActions() : UIMap;
    getVariations() : UIMap;
}
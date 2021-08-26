import UIObject from "./uiobject.ts";
import { FILE_TYPES } from "../data/lssContext.ts";
import {  VariableMap, StyleMap, UIMap } from "../data/global.ts";


export default interface Component extends UIObject {
    fileType: FILE_TYPES;
    parent?: UIObject;
   
    inherit(component: Component) : void;
};



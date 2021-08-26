import UIObject from "./uiobject.ts";
import { COMPONENT_TYPES } from "../data/lssContext.ts";
import {  VariableMap, StyleMap, UIMap } from "../data/global.ts";


export default interface Component extends UIObject {
    type: COMPONENT_TYPES;
    parent?: UIObject;
   
    inherit(component: Component) : void;
};



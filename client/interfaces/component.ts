import UIObject from "./uiobject.ts";
import { COMPONENT_TYPES } from "../data/lssContext.ts";


export default interface Component extends UIObject {
    type : COMPONENT_TYPES;
    parent ? : string | undefined;
   
    inherit(component: Component) : void;
};



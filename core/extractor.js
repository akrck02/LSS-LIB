import { Component } from '../classes/component.js';
import { Style } from '../classes/style.js';
import { Variable } from '../classes/variable.js';
import { Variation } from '../classes/variation.js';

let components = {};
let themes = {};
let settings = {};
let variables = {};

export function extract(json){
    if(exists(json.type)){
        switch (json.type) {
            case "component":       return extract_component(json);
            case "setting":         return extract_setting(json);
            case "theme":           return extract_theme(json);
            case "variable set":    return extract_variable_set(json);
            default: throw "[LSS][ERROR] Unknown file type: " + json.type;
        }
    }else throw "[LSS][ERROR] No type present in file";
}

function extract_component(json){
    
    if(!exists(json.uid))  json.uid = "Unknown.";

    if(!exists(json.name)) throw "[LSS][ERROR] No name in component " + json.uid;
    const component = new Component(json.name);

    if(exists(json.variables))
        for (const key in json.variables)
            component._variable(new Variable(key, json.variables[key]));
   
    if(exists(json.styles))
        for (const key in json.styles){
            let value = json.styles[key];
            if(is_variable(value) && exists(component.variables[value.substr(2)])) value = component.variables[value.substr(2)].css_var();
            component._style(new Style(key, value));
        } 

    if(exists(json.variations))
        for (const key in json.variations){
            let vr = new Variation(key,json.name);
            for(const style in json.variations[key]){
                vr._style(new Style(style,json.variations[key][style]));
            }
            component._variation(vr);
        }

    return component;
}

function exists(something){
    if(something == undefined) return false;
    if(something == null) return false;
    if(something.trim != null && something.trim() == "") return false;
    return true;
}

function is_variable(v){
    if(!exists(v)) return false;
    if(v.substr == null) return false;
    if(v.substr(0,2) == '--') return true;
    return false;
}


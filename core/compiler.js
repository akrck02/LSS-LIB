import * as fileSaver from "../lib/FileSaver.js";
import { extract } from "./extractor.js";

export function compile(comp){
    let out =  comp.compile();
    return out;
}

function save(content){
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    fileSaver.saveAs(blob, "static.css");
}

//TESTING AREA 
const json = {
    name : 'button',
    type : 'component',
    styles : {
        background : '--bg',
        width : '100px',
        height : '25px'
    },
    variables : {bg : 'dodgerblue'},
    variations : {
        disabled : {'--bg' : 'gray'}
    },
    uid:"GenericButton1"
}

//TESTING AREA 
const child = {
    name : 'button_red',
    type : 'component',
    styles : {
        background : '--bg',
        width : '20px'
    },
    variables : {bg : 'crimson'},
    variations : {
        disabled : {'--bg' : 'lightgray'}
    },
    id:"GenericButton2"
}

out. innerHTML = "PARENT : " + extract(json).compile();
out.innerHTML += "<br>";
out.innerHTML += "CHILD: " + extract(child).inherit(extract(json)).compile();
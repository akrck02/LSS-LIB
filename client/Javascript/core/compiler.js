import { extract } from "./extractor.js";

export function compile(comp){
    let out =  comp.compile();
    return out;
}

function save(content){
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    //fileSaver.saveAs(blob, "static.css");
}

//TESTING AREA 
const json = {
    name : 'button',
    type : 'component',
    styles : {
        background : '--bg',
        width : '100px',
        height : '25px',
        border : 'none',
        color  : 'white',
        cursor : 'pointer',
        'border-radius' : '6px'
    },
    variables : {bg : 'dodgerblue'},
    variations : {
        disabled : {'--bg' : 'gray'}
    },
    actions : {
        hover: {'box-shadow' : '0px 2px 4px rgba(0,0,0,.15)'},
        focus: {border: '3px solid black'}
    },
    uid:"GenericButton1"
}

//TESTING AREA 
const child = {
    name : 'button_red',
    type : 'component',
    styles : {
        background : '--bg',
        width : '120px'
    },
    variables : {bg : 'crimson'},
    variations : {
        disabled : {'--bg' : 'lightgray'}
    },
    id:"GenericButton2"
}

out. innerHTML = " /* PARENT : */ " + extract(json).compile();
out.innerHTML += " /* CHILD: */ " + extract(child).inherit(extract(json)).compile();

btn.onclick = () => save(out.innerHTML);
import { save } from "./API/LSS_API.js";
import { Component } from "./classes/component.js";
import { Style } from "./classes/style.js";
import { Variable } from "./classes/variable.js";
import { Action } from "./classes/action.js";

window.onload = () => {

    const comp = new Component("myComponent");
    const variables = [];
    variables.push(new Variable("bg","#f1f1f1"));
   
    const styles = [];
    styles.push(new Style('Background',variables[0].css_var()));
    styles.push(new Style('color','#404040'));  

    const actions = [];
    actions.push(new Action("hover",comp.name));
    actions[0]._style(new Style('Background','#fff'));

    actions.push(new Action("focus",comp.name));
    actions[1]._style(new Style('Border 1px solid',variables[0].css_var()));

    variables.forEach(v => comp._variable(v));
    styles.forEach(s => comp._style(s));
    actions.forEach(a => comp._action(a));

    const pre = document.createElement('pre');
    pre.innerHTML = comp.compile();
    document.body.appendChild(pre);

    const epicBtn = new Component("epicButton");
    const lssObjects = [comp,epicBtn];

    console.log(comp);
    
    document.getElementById("save").onclick = () => save(lssObjects);
    document.body.appendChild(pre);
};
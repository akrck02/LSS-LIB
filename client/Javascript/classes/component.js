import { fileTypes } from "./LSS_Context.js";

export const ComponentTypes = {
  component : "component",
  class     : "class",
  id        : "id",  
};

export class Component {
  constructor(name, type) {
    this._name = name;
    this.type = type || ComponentTypes.component;
    this._styles = {};
    this._actions = {};
    this._variations = {};
    this._variables = {};
  }

  _variable    (variable)   {this.variables[variable.name] = variable;}
  _style       (style)      {this.styles[style.name] = style;}
  _action      (action)     {this.actions[action.name] = action;}
  _variation   (variation)  {this.variations[variation.name] = variation;}

  set variables(p) {this._variables = p;}
  set styles(p) {this._styles = p;}
  set actions(p) {this._actions = p;}
  set variations(p) {this._variations = p;}

  get name()       {return this._name;}
  get variables()  {return this._variables;}
  get styles()     {return this._styles;}
  get actions()    {return this._actions;}
  get variations() {return this._variations;}

  variable      (name)    {return this.variables['--' + name];}
  variable_pro  (name)    {return this.variables[name];}
  style         (name)    {return this.styles[name];}
  action        (name)    {return this.actions[name];}
  variation     (name)    {return this.variations[name];}

  compileCSS(){ 
    let out = `.${this.name}{`;
    for (const key in this.variables)  out += this.variable_pro(key).line() + ";";
    for (const key in this.styles)   out += this.style(key).line();  
    out += '}'

    for (const key in this.variations)   out += " " + this.variation(key).compile(); 
    for (const key in this.actions)   out += " " + this.action(key).compile(); 

    return out;
  }

  compile(){
    let lss = {};

    lss.type = fileTypes.COMPONENT;
    lss.name = this.name;

    lss.variables = {};
    lss.styles = {};
    lss.actions = {};

    for (const key in this.variables) {
     lss.variables[key] = this.variables[key].compile();
    }

    for (const key in this.styles) {
     lss.styles[key] = this.styles[key].compile();
    }

    for (const key in this.actions) {
     lss.actions[key] = this.actions[key].compile();
    }

    return JSON.stringify(lss,undefined,4).replaceAll('"_','"');;
  }


  inherit(parent){
    for (const key in parent.variables)
      if(this.variable_pro(key) == undefined) 
        this._variable(parent.variable_pro(key));

    for (const key in parent.styles) 
      if(this.style(key) == undefined) 
        this._style(parent.styles[key]);

    for (const key in parent.variations) 
      if(this.variation(key) == undefined) {
        const vr = parent.variations[key]
        vr.parent = this.name;
        this._variation(vr);
      } 
      else
        for(const style in parent.variation(key).styles)
          if(this.variation(key).style(style) == undefined) 
            this.variation(key)._style(style);
      


      for (const key in parent.actions) 
      if(this.action(key) == undefined) {
        const vr = parent.actions[key]
        vr.parent = this.name;
        this._action(vr);
      } 
      else{
          for(const style in parent.action(key).styles)
            if(this.action(key).style(style) == undefined) 
              this.action(key)._style(style);
          
      }
    return this;
  }
 
}

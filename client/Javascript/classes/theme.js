export class Theme {
    constructor(name) {
        this._name = name;
        this._variables = [];
    }

    get name()  {return this._name}
    get variables() {return this._variables}

    set name(name) {this._name = name;}

    add(variable) {
        this._variables.push(variable);
    }

    compile() { 
        let out = this._name + " : {";
        
        this._variables.forEach( variable => {
            out += variable.compile();
        });

        out += "}";
        return out; 
    }
}  
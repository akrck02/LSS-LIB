
import variable from "../interfaces/variable.ts";

export default class Variable implements variable {
    name: string;
    value: string;
    
    constructor(name: string, value: string){
        this.name = name;
        this.value = value;
    }
    
    var(): string {
        return '--' + this.name;;
    }

    line(): string {
        return this.var() + " : " + this.value;
    }

    css_var(): string {
        return "var(" + this.var() + ")";
    }

    compile(): string {
        return this.value;
    }

} 
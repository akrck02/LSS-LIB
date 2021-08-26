import style from "../interfaces/style.ts";

export default class Style implements style {

    name: string;
    value: string;

    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }

    line(): string {
        return `${this.name}: ${this.value};`;
    }
    
    compile(): string {
        return `${this.value};`;
    }


} 
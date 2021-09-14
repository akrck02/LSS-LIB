import Builder from "../interfaces/builder";
import Compilable from "../interfaces/compilable";

export class Style implements Compilable {

    public COMPLEX : boolean = false;
    private uid: string = "";
    private name : string = "";
    private value: string = "";


    constructor(builder: StyleBuilder) {
        this.uid = builder.getUid();
        this.name = builder.getName();
        this.value = builder.getValue();
    }

    getUID(): string {
        return this.uid;
    }

    compile(): string {
        let out = "";
        out += `.${this.name} : ${this.value}`;
        return out;
    } 
} 

export default class StyleBuilder implements Builder {

    private uid : string;
    private name : string;
    private value: string;

    constructor() {
        this.uid = "";
        this.name = "";
        this.value = "";
    }

    getUid(): string {
        return this.uid;
    }

    getName(): string {
        return this.name;
    }

    getValue(): string {
        return this.value;
    }

    setUid(uid: string) : StyleBuilder {
        this.uid = uid;
        return this;
    }

    setName(name: string) : StyleBuilder {
        this.name = name;
        return this;
    }

    setValue(value: string) : StyleBuilder {
        this.value = value;
        return this;
    }


    build() : Style {
        return new Style(this);
    }

}
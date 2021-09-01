import Compilable from '../interfaces/compilable';
import Builder from '../interfaces/builder';

/**
 * Variable class
 */
export class Variable  implements Compilable {

    private uid: string;
    private name: string;
    private value: string;

    constructor(builder: VariableBuilder) {
        this.uid = builder.getUid();
        this.name = builder.getName();
        this.value = builder.getValue();
    }

    compile(): string {
        return `${this.name} : ${this.value}`;
    }

}

export default class VariableBuilder implements Builder {

    private uid: string = "";
    private name: string = "";
    private value: string = "";

    constructor () {}

    setUid(uid: string): VariableBuilder {
        this.uid = uid;
        return this;
    }

    setName(name: string): VariableBuilder {
        this.name = name;
        return this;
    }

    setValue(value: string): VariableBuilder {
        this.value = value;
        return this;
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

    build(): Variable {
        return new Variable(this);
    }

}

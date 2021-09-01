import Builder from "../interfaces/builder";
import Compilable from "../interfaces/compilable";

export class Component implements Compilable {

    private uid: string = "";
    private name: string = "";
    private type: string = "";

    private styles : string[] = [];
    private variables : string[] = [];
    private actions : string[] = [];
    private variations : string [] = [];

    constructor(builder: ComponentBuilder) {
        this.uid = builder.getUid();
        this.name = builder.getName();
        this.type = builder.getType();
        this.styles = builder.getStyles();
        this.variables = builder.getVariables();
        this.actions = builder.getActions();
        this.variations = builder.getVariations();
    }

    compile(): string {
     let out = "";
     
     out += "";
     return out;
    }
}

export default class ComponentBuilder implements  Builder {

    private uid: string = "";
    private name: string = "";
    private type: string = "";
    private styles : string[] = [];
    private variables : string[] = [];
    private actions : string[] = [];
    private variations : string [] = [];

    getUid() : string {
        return this.uid;
    }

    getName() : string {
        return this.name;
    }

    getType() : string {
        return this.type;
    }

    getStyles() : string[] {
        return this.styles;
    }

    getVariables() : string[] {
        return this.variables;
    }

    getActions() : string[] {
        return this.actions;
    }

    getVariations() : string[] {
        return this.variations;
    }
 

    setUid(uid: string) : Builder {
        this.uid = uid;
        return this;
    }

    setName(name: string) : Builder {
        this.name = name;
        return this;
    }

    setType(type: string) : Builder {
        this.type = type;
        return this;
    }

    setStyles(styles: string[]) : Builder {
        this.styles = styles;
        return this;
    }

    setVariables(variables: string[]) : Builder {
        this.variables = variables;
        return this;
    }

    setActions(actions: string[]) : Builder {
        this.actions = actions;
        return this;
    }

    setVariations(variations: string[]) : Builder {
        this.variations = variations;
        return this;
    }

    build() : Component {
        return new Component(this);
    }

}
import Builder from "../interfaces/builder";
import Compilable from "../interfaces/compilable";

export class Component implements Compilable {

    public COMPLEX : boolean = true;
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

    private evalType(): string {
        let suffix = "";
        switch (this.type) {
            case "class":
                suffix = ".";
                break;
            case "id":
                suffix = "#";
                break;
        }
        return suffix;
    }

    getUID(): string {
        return this.uid;
    }

    compile(): string {
     let out = this.evalType() + this.name + " {";
     
     this.styles.forEach(style => {
        //compile style
     });

     this.variables.forEach(variable => {
         //compile variable
     });

     this.actions.forEach(action => {
         //compile action
     });

     this.variations.forEach(variation => {
         //compile variation
     });

     out += "}";
     return out;
    }
}

export default class ComponentBuilder implements  Builder {

    private uid : string = "";
    private name : string = "";
    private type : string = "";

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
 

    setUid(uid: string) : ComponentBuilder {
        this.uid = uid;
        return this;
    }

    setName(name: string) : ComponentBuilder {
        this.name = name;
        return this;
    }

    setType(type: string) : Builder {
        this.type = type;
        return this;
    }

    setStyles(styles: string[]) : ComponentBuilder {
        this.styles = styles;
        return this;
    }

    setVariables(variables: string[]) : ComponentBuilder {
        this.variables = variables;
        return this;
    }

    setActions(actions: string[]) : ComponentBuilder {
        this.actions = actions;
        return this;
    }

    setVariations(variations: string[]) : ComponentBuilder {
        this.variations = variations;
        return this;
    }

    build() : Component {
        return new Component(this);
    }

}
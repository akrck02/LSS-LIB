import Builder from "../interfaces/builder";
import Compilable from "../interfaces/compilable";

export class Action implements Compilable{
    
    private uid: string = "";
    private name: string = "";
    private type: string = "";
    private parent : string = "";

    private styles : string[] = [];
    private variables : string[] = [];
    private actions : string[] = [];
    private variations : string [] = [];
    
    constructor(builder: ActionBuilder) {
        this.uid = builder.getUid();
        this.name = builder.getName();
        this.type = builder.getType();
        this.parent = builder.getParent();
        this.styles = builder.getStyles();
        this.variables = builder.getVariables();
        this.actions = builder.getActions();
        this.variations = builder.getVariations();
    }
    
    compile(): string {
        let out = '';
        
        out += "";
        return out;
    }
} 

export default class ActionBuilder implements Builder {

    
    private uid: string = "";
    private name: string = "";
    private type: string = "";
    private parent : string = "";

    private styles : string[] = [];
    private variables : string[] = [];
    private actions : string[] = [];
    private variations : string [] = [];

    getUid(): string {
        return this.uid;
    }
    
    getName(): string {
        return this.name;
    }

    getType(): string {
        return this.type;
    }

    getParent(): string {
        return this.parent;
    }

    getStyles(): string[] {
        return this.styles;
    }

    getVariables(): string[] {
        return this.variables;
    }

    getActions(): string[] {
        return this.actions;
    }

    getVariations(): string[] {
        return this.variations;
    }
    

    setUid(uid: string): ActionBuilder {
        this.uid = uid;
        return this;
    }

    setName(name: string): ActionBuilder {
        this.name = name;
        return this;
    }

    setType(type: string): ActionBuilder {
        this.type = type;
        return this;
    }

    setParent(parent: string): ActionBuilder {
        this.parent = parent;
        return this;
    }

    setStyles(styles: string[]): ActionBuilder {
        this.styles = styles;
        return this;
    }

    setVariables(variables: string[]): ActionBuilder {
        this.variables = variables;
        return this;
    }

    setActions(actions: string[]): ActionBuilder {
        this.actions = actions;
        return this;
    }

    setVariations(variations: string[]): ActionBuilder {
        this.variations = variations;
        return this;
    }
    

    build(): Action {
        return new Action(this);
    }
}
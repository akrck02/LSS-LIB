import Builder from '../interfaces/builder';
import Compilable from '../interfaces/compilable';

export class Theme implements Compilable {
    
    public COMPLEX : boolean = true;
    private uid : string;
    private variables: string[];

    constructor(builder : ThemeBuilder) {
        this.uid = builder.getUid();
        this.variables = builder.getVariables();
    }

    getUID(): string {
        return this.uid;
    }

    compile(): string {
        let out = '';

        this.variables.forEach(uid => {

            //if it is on cache, we don't need to compile it

            //else we compile it and add it to the cache
            
        });
        
        return out;
    }

}


export default class ThemeBuilder implements Builder {

    private uid : string =  "";
    private variables : string[] = []; 

    constructor () {}

    setVariables (variables: string[]) : ThemeBuilder {
        this.variables = variables;
        return this;
    }

    setUid (uid: string) : ThemeBuilder {
        this.uid = uid;
        return this;
    }

    getVariables () : string[] {
        return this.variables;
    }

    getUid () : string {
        return this.uid;
    }

    build () : Theme {
        return new Theme(this);
    }

}
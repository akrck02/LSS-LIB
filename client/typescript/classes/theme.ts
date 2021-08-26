import theme from '../interfaces/theme.ts';
import variable from '../interfaces/variable.ts';
import { VariableMap } from "../data/global.ts";

export default class Theme implements theme {
    name: string;
    variables: VariableMap;

    constructor(name: string) {
        this.name = name;
        this.variables = {};
    }

    addVariable(variable : variable): void {
        this.variables[variable.name] = variable;
    }
    compile(): string {
        return "";
    }
}
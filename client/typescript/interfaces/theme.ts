import Variable from "./variable.ts";
import { VariableMap } from "../data/global.ts";

export default interface Theme {
    name: string;
    variables: VariableMap;

    addVariable(variable : Variable): void;
    compile(): string;
}

import LSSObject from './lssobject.ts';

export default interface Theme extends LSSObject {
    name: string;
    variables: string [];

    addVariable(id: string): void;
    compile(): string;
}

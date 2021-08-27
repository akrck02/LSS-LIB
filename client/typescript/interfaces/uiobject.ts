import LSSObject from './lssobject.ts';

export default interface UIObject extends LSSObject {
    uid: string;
    name: string;
    variables : string [];
    styles : string [];
    variations: string [];
    actions: string [];
    parent ? : string | undefined;

    compile() : string;
    inherit(parent: UIObject) : void;
    setParent(parent: string) : void;
}
import Variable from '../interfaces/variable.ts';
import Style from '../interfaces/style.ts';
import UIObject from '../interfaces/uiobject.ts';

//interfaces
export interface Map {
    [key: string]: any;
}

//classes
export class BoolHashmap implements Map{
    [key: string]: boolean;
}

export class StringMap implements Map{
    [key: string]: string;
}

export class VariableMap implements Map{
    [key: string]: Variable;
}

export class StyleMap implements Map{
    [key: string]: Style;
}

export class UIMap implements Map{
    [key: string]: UIObject;
}
//data
const UID_STACK = new BoolHashmap();


//functions
export function add_uid(uid: string): void {
    UID_STACK[uid] = true;
}

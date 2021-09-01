import LSSObject from '../interfaces/lssobject.ts';

//interfaces
export interface Map {
    [key: string]: any;
}

//classes
export class LssMap implements Map{
    [key: string]: LSSObject;
}

export class StringMap implements Map{
    [key: string]: string;
}






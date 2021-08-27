
import LSSObject from '../interfaces/lssobject.ts';
import { LssMap } from '../data/global.ts';
import uid from '../tools/uid.ts';
import * as logger from '../tools/logger.ts';

//data
const UID_STACK = new LssMap();

//functions
function addUID(uid: string, object : LSSObject): void {
    UID_STACK[uid] = object;
}

export function generateUID(obj: LSSObject): string {
    let id = uid();
    while(UID_STACK[id]){
        id = uid();
    }

    addUID(id, obj);
    logger.log('Cache',`Generated UID: ${id}`);
    
    return id;
}


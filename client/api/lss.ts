import LSSObject from '../interfaces/lssobject.ts';

interface lssAPI {
    objects : LSSObject[];
    add(object : LSSObject) : void;
    compile() : string[];
}

export class Lss implements lssAPI {
    objects : LSSObject[];

    constructor() {
        this.objects = [];
    };

    add(object : LSSObject) : void {
      this.objects.push(object);
    }

    compile () : string[]{
        const files : string[] = [];
    
      this.objects.forEach(object => {
        files.push(object.compile());
      });
    
      return files;
    }
  
} 

export default Lss;

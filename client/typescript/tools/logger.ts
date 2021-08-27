
//This variable enables logger
let loggerOn : boolean = true;

export function log( title :string , ...args: any[]) : void {
  if( loggerOn ) 
    console.log(`[Lss][${title}]`, ...args);
}
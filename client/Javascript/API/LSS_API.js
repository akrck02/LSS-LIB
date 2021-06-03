import * as fileSaver from "../lib/FileSaver.js";
import * as JSzip  from "../lib/jszip.min.js";


console.log("Welcome to lss api");



/**
 *  Save compiled files
 * @param {*} lssObjects 
 */
export const save = (lssObjects) => {

    let zip = new JSZip();
    lssObjects.forEach(obj => {
        const out = obj.compile();
        zip.file(obj.name + ".lss", out);
    });

    zip.generateAsync({type: "blob"}).then((content) => { fileSaver.saveAs(content, "LSS_Proyect1.zip");});
} 



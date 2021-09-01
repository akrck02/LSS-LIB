import { FILE_TYPES } from "../data/lssContext.ts";

export default interface LSSObject {
    fileType: FILE_TYPES;
    uid: string;
    compile() : string;
}
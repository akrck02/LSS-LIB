export default interface Compilable {
    COMPLEX : boolean,
    getUID(): string;
    compile(): string;
}
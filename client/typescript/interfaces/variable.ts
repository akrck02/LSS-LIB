//Definition of the Variable interface
export default interface Variable {
    name: string;
    value: string;
    var(): string;
    line(): string;
    css_var(): string;
    compile(): string;
}

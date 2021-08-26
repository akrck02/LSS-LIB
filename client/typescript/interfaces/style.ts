
//Definition of the Style interface
export default interface Style {
    name: string;
    value: string;
    line(): string;
    compile(): string;
}


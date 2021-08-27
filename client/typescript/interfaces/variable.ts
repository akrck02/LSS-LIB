import LSSObject from './lssobject.ts';

export default interface Variable extends LSSObject  {
    name: string;
    value: string;
    var(): string;
    line(): string;
    cssVar(): string;
}

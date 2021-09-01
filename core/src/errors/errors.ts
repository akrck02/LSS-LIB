export default class LssError extends Error {
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, LssError.prototype)
    }
}
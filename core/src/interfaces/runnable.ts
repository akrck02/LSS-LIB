export default interface Runnable {
    run(): Promise<any>;
}
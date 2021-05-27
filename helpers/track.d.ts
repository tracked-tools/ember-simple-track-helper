declare class State<T> {
    private _value;
    get value(): T;
    constructor(initial: T);
    update: (newValue: T) => void;
}
export type { State };
export declare function track<T>([value]: [T]): State<T>;
declare const _default: any;
export default _default;

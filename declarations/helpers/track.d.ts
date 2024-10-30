declare class State<T> {
    private _value;
    get value(): T;
    constructor(initial: T);
    update: (newValue: T) => void;
}
export type { State };
export declare function track<T>([value]: [T]): State<T>;
declare const _default: abstract new <T>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [T];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: State<T>;
}>;
export default _default;
//# sourceMappingURL=track.d.ts.map
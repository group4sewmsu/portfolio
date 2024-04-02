export default class AxleHeaders {
    private headers;
    constructor(headers: Headers);
    append(name: string, value: string): void;
    delete(name: string): boolean;
    deleteByValue(value: string): boolean;
    get entries(): IterableIterator<[string, string]>;
    get(name: string): string | null;
    getByValue(value: string): string | undefined;
    set(name: string, value: string, ifExists?: boolean): boolean;
    has(name: string): boolean;
    hasValue(value: string): boolean | undefined;
    each(cb: <t = unknown>(name: string, value: string, index: number) => t): void;
    keys(): IterableIterator<string>;
    values(): IterableIterator<string>;
    keyArray(): string[];
    valueArray(): string[];
    object(): {
        [k: string]: string;
    };
    is(name: string, value: string): boolean | null;
    includesValue(name: string, value: string): boolean | null;
    get basic(): {
        append(name: string, value: string): void;
        delete(name: string): void;
        get(name: string): string | null;
        has(name: string): boolean;
        set(name: string, value: string): void;
        forEach(callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void;
        entries(): IterableIterator<[string, string]>;
        keys(): IterableIterator<string>;
        values(): IterableIterator<string>;
        [Symbol.iterator](): IterableIterator<[string, string]>;
    };
}

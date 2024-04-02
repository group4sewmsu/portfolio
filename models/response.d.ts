import AxleHeaders from './headers';
export default class AxleResponse {
    private res;
    private timeStart;
    private timeEnd;
    constructor(res: Response, timeStart: number, timeEnd: number);
    json<t = Record<string, unknown>>(): Promise<t>;
    data(): Promise<string>;
    body(): Promise<Uint8Array | undefined>;
    get bodyReader(): ReadableStream<Uint8Array> | null;
    get bodyUsed(): boolean;
    redirect(url: string | URL, ifStatusOk?: boolean): void;
    finishRedirect(): true | null;
    get status(): number;
    get statusMessage(): string;
    blob(): Promise<Blob>;
    get url(): string;
    get query(): {
        [k: string]: string;
    };
    queryParam(name: string): string | null;
    get headers(): AxleHeaders;
    get timeTook(): number;
    get type(): ResponseType;
    get basic(): {
        headers: Headers;
        ok: boolean;
        redirected: boolean;
        status: number;
        statusText: string;
        type: ResponseType;
        url: string;
        clone(): Response;
        body: ReadableStream<Uint8Array> | null;
        bodyUsed: boolean;
        arrayBuffer(): Promise<ArrayBuffer>;
        blob(): Promise<Blob>;
        formData(): Promise<FormData>;
        json(): Promise<any>;
        text(): Promise<string>;
    };
}

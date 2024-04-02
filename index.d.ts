import deleteReq from './core/delete';
import get from './core/get';
import head from './core/head';
import patch from './core/patch';
import post from './core/post';
import put from './core/put';
import use from './core/use';
import useOptions from './core/useOptions';
import cors from './middleware/cors';
import kneepads from './middleware/kneepads';
import timeTook from './middleware/timeTook';
import AxleCancelMark from './models/cancelMark';
import AxleRequest from './models/request';
import AxleResponse from './models/response';
export declare namespace AxleTypes {
    interface AxleHeaders {
        [key: string]: any;
        'Content-Type'?: string;
    }
    export interface AxleOptions {
        mode?: 'no-cors' | 'cors' | 'same-origin';
        cache?: 'no-cache' | 'default' | 'reload' | 'force-cache' | 'only-if-cached';
        credentials?: RequestCredentials;
        headers?: AxleHeaders;
        redirect?: 'manual' | 'follow' | 'error';
        referrer?: string;
        referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
        body?: string | FormData;
        keepalive?: boolean;
        signal?: AbortSignal | null;
        window?: any;
        integrity?: string;
        handleStatus?: (status: number, statusMessage: string) => boolean;
    }
    export type AxleMiddleware = (req: AxleRequest, res: AxleResponse) => unknown;
    export interface AxleError {
        status: number;
        message: string;
        response: AxleResponse;
        request: AxleRequest;
    }
    export {};
}
declare const Axle: {
    post: typeof post;
    get: typeof get;
    delete: typeof deleteReq;
    put: typeof put;
    patch: typeof patch;
    head: typeof head;
    all: (promises: Promise<AxleResponse>[]) => Promise<AxleResponse[]>;
    cancelMark: typeof AxleCancelMark;
    use: typeof use;
    useOptions: typeof useOptions;
    middleware: {
        timeTook: typeof timeTook;
    };
    middlewareOptions: {
        cors: typeof cors;
        kneepads: typeof kneepads;
    };
};
export default Axle;

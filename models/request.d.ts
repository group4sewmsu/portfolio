import { AxleTypes } from '../index';
import AxleResponse from './response';
export default class AxleRequest<t = Record<string, any>> {
    method: string;
    url: string;
    body: t | FormData | undefined | null;
    options: AxleTypes.AxleOptions;
    response: AxleResponse | undefined;
    constructor(method: string, url: string, body: t | undefined | null, options: AxleTypes.AxleOptions);
    run(): Promise<AxleResponse>;
}

import { AxleTypes } from '../index';
import AxleResponse from '../models/response';
export default function deleteReq<t = Record<string, any> | FormData>(url: string, data?: t | undefined | null, options?: AxleTypes.AxleOptions): Promise<AxleResponse>;

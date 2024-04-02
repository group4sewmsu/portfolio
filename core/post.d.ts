import { AxleTypes } from '../index';
import AxleResponse from '../models/response';
export default function post<t = Record<string, any>>(url: string, data?: t | undefined | null, options?: AxleTypes.AxleOptions): Promise<AxleResponse>;

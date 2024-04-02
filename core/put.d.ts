import { AxleTypes } from '../index';
import AxleResponse from '../models/response';
export default function put<t = Record<string, any>>(url: string, data?: t | undefined | null, options?: AxleTypes.AxleOptions): Promise<AxleResponse>;

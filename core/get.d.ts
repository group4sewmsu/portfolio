import { AxleTypes } from '../index';
import AxleResponse from '../models/response';
export default function get(url: string, options?: AxleTypes.AxleOptions): Promise<AxleResponse>;

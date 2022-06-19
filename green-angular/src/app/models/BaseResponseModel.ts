export interface BaseResponseModel<T = any> {
    code: number;
    status?: number;
    message?: string;
    data?: T;
    email?: string;
}

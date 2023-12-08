export interface IDefaultRequest<T> {
    status_code: number;
    data: T;
    message?: string;
}
export interface IStrategy<T> {
    getAllInfo(data: T[]): T[];
}
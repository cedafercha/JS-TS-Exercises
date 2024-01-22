import { ICountry, IStrategy } from "../interfaces";

export abstract class AbstractStrategy<T extends ICountry> implements IStrategy<T> {
    getAllInfo(data: []): T[] {
        return data;
    }
}
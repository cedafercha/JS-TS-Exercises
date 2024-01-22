import CountryEnum from "../enums/country.enums";
import { ICountry } from "../interfaces";
import { AbstractStrategy } from "./AbstractStrategy";

export class MexicoStrategy<T extends ICountry> extends AbstractStrategy<T> {
    getAllInfo(data: T[]): T[] {
        return data.filter(
            element => element.country === CountryEnum.Mexico
        );
    }
}
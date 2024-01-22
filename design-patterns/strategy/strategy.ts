import { IBeer } from "./interfaces/IBeer";
import BEERS from "./constants/BEERS";
import { IStrategy } from "./interfaces/IStrategy";
import { 
    ColombiaStrategy,
    MexicoStrategy,
    BelgiumStrategy
} from "./strategies";

class InfoContext<T> {
    private strategy: IStrategy<T>;
    private data: T[];

    constructor(_strategy: IStrategy<T>, _data: T[]) {
        this.strategy = _strategy;
        this.data = _data;
    }

    setStrategy(_strategy: IStrategy<T>): void {
        this.strategy = _strategy;
    }

    showData(): T[] {
        return this.strategy.getAllInfo(this.data);
    }
}

const colombiaStrategy = new ColombiaStrategy<IBeer>();
const mexicoStrategy = new MexicoStrategy<IBeer>();
const belgiumStrategy = new BelgiumStrategy<IBeer>();

let beersByCountry = new InfoContext<IBeer>(colombiaStrategy, BEERS);
console.log('Colombian beers: ', beersByCountry.showData());

beersByCountry.setStrategy(mexicoStrategy);
console.log('Mexican beers: ', beersByCountry.showData());

beersByCountry.setStrategy(belgiumStrategy);
console.log('Belgian beers: ', beersByCountry.showData());
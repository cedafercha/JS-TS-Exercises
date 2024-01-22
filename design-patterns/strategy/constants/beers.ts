import CountryEnum from "../enums/country.enums";
import { IBeer } from "../interfaces/IBeer";

const BEERS: IBeer[] = [
    {
        name: "Club Colombia",
        country: CountryEnum.Colombia,
        img: "https://www.lechoneriaedgar.com/wp-content/uploads/2020/08/club-colombia-dorada.png"
    },
    {
        name: "Lágrimas Negras",
        country: CountryEnum.Mexico,
        img: "https://cdn.shopify.com/s/files/1/1176/1532/products/Ramuri_Lagrimas-negras_Thumb_2_406x406.png?v=1598287129"
    },
    {
        name: "Delirium Tremens",
        country: CountryEnum.Belgium,
        img: "https://res.cloudinary.com/imporbeer/images/f_auto,q_auto/v1691083813/6/6.png?_i=AA"
    },
    {
        name: "BBC",
        country: CountryEnum.Colombia,
        img: "https://www.bbccerveceria.com/sites/g/files/seuoyk221/files/2022-08/caja-negra-final.png"
    }
];

export default BEERS;
import { IBasketItem } from "../Redux/basketReducer";
import { IProduct } from "../Redux/catalogReducer";

export const DATA_URL = "/data.json";
export enum ROUTE {
  CATALOG = "/catalog/",
  CARD = "/catalog/card/:cardId",
  BASKET = "/basket/",
  ALL = "*",
}

export enum FILTERSNAME {
  BODY = "body",
  HAND = "hand",
  FOOT = "foot",
  FACE = "face",
  HAIR = "hair",
  SUNTAN = "suntan",
  SHAVING = "shaving",
  PRESENT = "present",
  HYGIENE = "hygiene",
  ORAL = "oral",
  PAPER = "paper",
}
export const FILTERS = [
  {
    name: FILTERSNAME.BODY,
    title: "Уход за телом",
  },
  {
    name: FILTERSNAME.HAND,
    title: "Уход за руками",
  },
  {
    name: FILTERSNAME.FOOT,
    title: "Уход за ногами",
  },
  {
    name: FILTERSNAME.FACE,
    title: "Уход за лицом",
  },
  {
    name: FILTERSNAME.HAIR,
    title: "Уход за волосами",
  },
  {
    name: FILTERSNAME.SUNTAN,
    title: "Средства для загара",
  },
  {
    name: FILTERSNAME.SHAVING,
    title: "Средства для бритья",
  },
  {
    name: FILTERSNAME.PRESENT,
    title: "Подарочные наборы",
  },
  {
    name: FILTERSNAME.HYGIENE,
    title: "Гигиеническая продукция",
  },
  {
    name: FILTERSNAME.ORAL,
    title: "Гигиена полости рта",
  },
  {
    name: FILTERSNAME.PAPER,
    title: "Бумажная продукция",
  },
];

export enum SORTNAMES {
  PRICE = "price",
  PRICE_REVERSE = "price_reverse",
  TITLE = "title",
  TITLE_REVERSE = "title_reverse",
}

export const SORTSVALUES = [
  {
    name: SORTNAMES.TITLE,
    title: "Название А-Я",
  },
  {
    name: SORTNAMES.TITLE_REVERSE,
    title: "Название Я-А",
  },
  {
    name: SORTNAMES.PRICE,
    title: "Цена min",
  },
  {
    name: SORTNAMES.PRICE_REVERSE,
    title: "Цена max",
  },
];

export const filterData = (
  data: IProduct[],
  min: number,
  max: number,
  manufacturer: string[],
  filterByGroup?: string
) => {

  manufacturer = manufacturer.map((item) => item.toLocaleLowerCase());

  return data.filter((product) => {

    const filterGroup = filterByGroup !== '' ? product.groups.includes(filterByGroup as FILTERSNAME) : true


    return (
      product.price >= min &&
      product.price <= max &&
      manufacturer.includes(product.manufacturer.toLocaleLowerCase()) &&
      filterGroup
    );
  });
};

export const getMinMaxFromArray = (array: IProduct[]) => {
  const sortedArray = array.sort(
    (productA, productB) => productA.price - productB.price
  );
  return {
    min: sortedArray[0].price,
    max: sortedArray[sortedArray.length - 1].price,
  };
};

export const sort = (array: IProduct[], value: string) => {
  const copyArray = [...array];
  switch (value) {
    case SORTNAMES.TITLE:
      return copyArray.sort((a, b) => (a.title > b.title ? 1 : -1));
    case SORTNAMES.TITLE_REVERSE:
      return copyArray.sort((a, b) => (a.title > b.title ? -1 : 1));
    case SORTNAMES.PRICE:
      return copyArray.sort((a, b) => (a.price - b.price ));
    case SORTNAMES.PRICE_REVERSE:
      return copyArray.sort((a, b) => (b.price - a.price ));
    default:
      return array;
  }
};

export const calculateTotalPrice = (data: IBasketItem[]) => {
  const sum = data.reduce((sum, item)  =>  sum + (item.quantity * (item.price*100))/100, 0);
  return +sum.toFixed(2);
}
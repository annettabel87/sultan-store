import { IBasketItem } from "../Redux/basketReducer";
import { IProduct } from "../Redux/catalogReducer";
import { FILTERSNAME, SORTNAMES } from "./constants";


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

export const countStartEndToPagination = (currentPage: number, countPerPage: number) => {
  const start = currentPage * countPerPage - countPerPage;
  const end = start + countPerPage;
  return {
    start, end
  }
}
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FILTERSNAME, LOCAL_STORAGE_KEYS, SORTNAMES } from "../common/constants";

export interface IProduct {
  id: number;
  urlImg: string;
  title: string;
  sizeType: string;
  size: string;
  barcode: number;
  manufacturer: string;
  brand: string;
  description: string;
  price: number;
  groups: FILTERSNAME[];
}
interface ICatalogState {
  filterByGroup: FILTERSNAME | "";
  sortValue: SORTNAMES | "";
  minPrice: number;
  maxPrice: number;
  products: IProduct[];
  allManufactures: string[];
  isLoading: boolean;
  error: string;
  minmax_price_data: {
    min: number,
    max: number
  }
  filteredManufactures: string[],
  currentPage: number,
  totalCount: number,
  countPerPage: number
  selectedCard: IProduct
}

export const initialState: ICatalogState = {
  filterByGroup: "",
  sortValue: "",
  minPrice: 0,
  maxPrice: 10000,
  products: [],
  allManufactures: [],
  isLoading: false,
  error: "",
  minmax_price_data: {
    min: 0,
    max: 10000
  },
  filteredManufactures: [],
  currentPage: 1,
  totalCount: 1,
  countPerPage: 15,
  selectedCard: {
    id: -1,
    urlImg: "",
    title: "",
    sizeType: "",
    size: "",
    barcode: -1,
    manufacturer: "",
    brand: "",
    description: "",
    price: -1,
    groups: []
  }
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    PRODUCTS_FETCHING(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    SET_PRODUCTS(state, action: PayloadAction<IProduct[]>) {
      state.isLoading = false;
      state.error = "";
      state.products = action.payload;
    },
    PRODUCTS_FETCHING_ERROR(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.products = [];
    },
    SET_FILTER(state, action: PayloadAction<FILTERSNAME | "">) {
      state.filterByGroup = action.payload;
    },
    SET_SORTVALUE(state, action: PayloadAction<SORTNAMES | "">) {
      state.sortValue = action.payload;
    },
    SET_MAXPRICE(state, action: PayloadAction<number>) {
      action.payload <= state.minmax_price_data.max ?
        state.maxPrice = action.payload : state.maxPrice = state.minmax_price_data.max
    },
    SET_MINPRICE(state, action: PayloadAction<number>) {
      action.payload >= state.minmax_price_data.min ?
        state.minPrice = action.payload : state.minPrice = state.minmax_price_data.min
    },
    SET_ALL_MANUFACTURER(state, action: PayloadAction<string[]>) {
      state.allManufactures = action.payload;
    },
    ADD_FILTERED_MANUFACTURER(state, action: PayloadAction<string>) {
      state.filteredManufactures.push(action.payload);
    },
    REMOVE_FILTERED_MANUFACTURER(state, action: PayloadAction<string>) {
      state.filteredManufactures = state.filteredManufactures.filter(item => item !== action.payload);
    },
    SET_MIN_MAX_PRICE_FROM_DATA(state, action: PayloadAction<{
      min: number,
      max: number
    }>) {
      state.minmax_price_data = action.payload;
    },
    CLEAR_FILTERS(state) {
      state.filteredManufactures = [];
      state.minPrice = state.minmax_price_data.min;
      state.maxPrice = state.minmax_price_data.max;
      state.filterByGroup = ""
    },
    SET_TOTAL_COUNT(state, action: PayloadAction<number>) {
      state.totalCount = action.payload;
    },
    SET_CURRENT_PAGE(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    SELECT_CARD(state, action: PayloadAction<IProduct>) {
      state.selectedCard = action.payload;
    },
    CLEAR_STATE(state) {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.PRODUCTS);
      state.products = [];
    },
    ADD_NEW_PRODUCT(state, action: PayloadAction<IProduct>)  {
      state.products.push(action.payload);
      localStorage.setItem(LOCAL_STORAGE_KEYS.PRODUCTS, JSON.stringify(state.products));
    },
    DELETE_PRODUCT(state, action: PayloadAction<number>) {
      state.products = state.products.filter(product => product.id !== action.payload);
      localStorage.setItem(LOCAL_STORAGE_KEYS.PRODUCTS, JSON.stringify(state.products));
    },
    UPDATE_PRODUCT(state, action: PayloadAction<IProduct>)  {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      state.products[index] = action.payload;
      localStorage.setItem(LOCAL_STORAGE_KEYS.PRODUCTS, JSON.stringify(state.products));
    },
  },
});

export const {
  SET_FILTER,
  SET_SORTVALUE,
  SET_MAXPRICE,
  SET_MINPRICE,
  SET_ALL_MANUFACTURER,
  SET_PRODUCTS,
  ADD_FILTERED_MANUFACTURER,
  REMOVE_FILTERED_MANUFACTURER,
  CLEAR_FILTERS,
  SET_TOTAL_COUNT,
  SET_CURRENT_PAGE,
  SELECT_CARD,
  CLEAR_STATE,
  DELETE_PRODUCT,
  ADD_NEW_PRODUCT,
  UPDATE_PRODUCT
} = catalogSlice.actions;
export default catalogSlice.reducer;

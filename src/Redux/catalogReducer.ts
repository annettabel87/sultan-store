import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FILTERSNAME, SORTNAMES } from "../common/helpers";

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
}

export const initialState: ICatalogState = {
  filterByGroup: "",
  sortValue: "",
  minPrice: 0,
  maxPrice: 0,
  products: [],
  allManufactures: [],
  isLoading: false,
  error: "",
  minmax_price_data: {
    min: 0,
    max: 0
  },
  filteredManufactures: [],
  currentPage: 1,
  totalCount: 1,
  countPerPage: 15,
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    PRODUCTS_FETCHING(state) {
      state.isLoading = true;
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
      state.filteredManufactures = state.allManufactures;
      state.minPrice = state.minmax_price_data.min;
      state.maxPrice = state.minmax_price_data.max;
    },
    SET_TOTAL_COUNT(state, action: PayloadAction<number>) {
      state.totalCount = action.payload;
    },
    SET_CURRENT_PAGE(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {},
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
  SET_CURRENT_PAGE
} = catalogSlice.actions;
export default catalogSlice.reducer;

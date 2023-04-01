import { createAsyncThunk } from "@reduxjs/toolkit";
import { filterData, getMinMaxFromArray, sort } from "../common/helpers";
import { catalogSlice, IProduct } from "./catalogReducer";
import { RootState } from "./store";
import { IUser, authSlice } from "./authReducer";
import { DATA_URL, AUTH_URL, LOCAL_STORAGE_KEYS } from "../common/constants";


export interface ISearchParam {
  min?: number,
  max?: number,
  manufacturer?: string[],
}

export interface IFetchProps {
  url: string,
  searchParam?: ISearchParam,
}


export const fetchProducts = createAsyncThunk(
  "catalog/fetch",
  async ({ url, searchParam }: IFetchProps, { dispatch, getState }) => {
    try {
      const state = getState() as RootState;
      dispatch(catalogSlice.actions.PRODUCTS_FETCHING(true));

      setTimeout(async () => {
        const localStorageProducts = localStorage.getItem(LOCAL_STORAGE_KEYS.PRODUCTS);
        let data: IProduct[];

        if (localStorageProducts) {
          data = JSON.parse(localStorageProducts) as IProduct[];
        } else {
          const response = await fetch(url);
          data = await response.json();
        }

        dispatch(catalogSlice.actions.PRODUCTS_FETCHING(false));

        const manufacturer = [
          ...new Set(data.map((product) => product.manufacturer)),
        ];

        const filterByGroup = state.catalogReducer.filterByGroup;

        dispatch(catalogSlice.actions.SET_ALL_MANUFACTURER(manufacturer));

        const { min, max } = getMinMaxFromArray(data);

        dispatch(catalogSlice.actions.SET_MIN_MAX_PRICE_FROM_DATA({ min, max }));

        const maxParam = state.catalogReducer.maxPrice < max ? state.catalogReducer.maxPrice : max;
        const minParam = state.catalogReducer.minPrice > min ? state.catalogReducer.minPrice : min;
        const filteredArray = state.catalogReducer.filteredManufactures.length
          ? filterData(
            data,
            minParam,
            maxParam,
            state.catalogReducer.filteredManufactures,
            filterByGroup
          )
          : filterData(data, minParam, maxParam, manufacturer, filterByGroup);

        const start = state.catalogReducer.currentPage * state.catalogReducer.countPerPage - state.catalogReducer.countPerPage;
        const end = start + state.catalogReducer.countPerPage;

        dispatch(catalogSlice.actions.SET_TOTAL_COUNT(filteredArray.length));
        const sortedArray = sort(filteredArray, state.catalogReducer.sortValue);
        dispatch(catalogSlice.actions.SET_PRODUCTS(sortedArray.slice(start, end)));

      }, 500);
    } catch (e: unknown) {
      dispatch(catalogSlice.actions.PRODUCTS_FETCHING_ERROR("not found"));
    }
  }
);

export interface IFetchCardProps {
  id: number,
}

export const fetchFullProduct = createAsyncThunk(
  "card/fetch",
  async ({ id }: IFetchCardProps, { dispatch, getState }) => {
    try {
      dispatch(catalogSlice.actions.PRODUCTS_FETCHING(true));
      const response = await fetch(DATA_URL);
      const data: IProduct[] = await response.json();
      const product = data.filter(product => product.id === id)[0]

      setTimeout(() => {
        dispatch(catalogSlice.actions.SELECT_CARD(product));
        dispatch(catalogSlice.actions.PRODUCTS_FETCHING(false));
      }, 500);
    } catch (e: unknown) {
      dispatch(catalogSlice.actions.PRODUCTS_FETCHING_ERROR("not found"));
    }
  }
);

export interface IFetchAuthProps {
  login: string,
  password: string
}

export const fetchAuthData = createAsyncThunk(
  "login",
  async ({ login, password }: IFetchAuthProps, { dispatch }) => {
    try {

      dispatch(authSlice.actions.SET_IS_LOADING(true));

      setTimeout(async () => {
        const response = await fetch(AUTH_URL);
        const userData: IUser[] = await response.json();
        const user = userData.find(item => item.username === login && item.password === password)
        if (user) {
          localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH, 'true');
          localStorage.setItem(LOCAL_STORAGE_KEYS.USERNAME, user.username);
          dispatch(authSlice.actions.SET_USER(user));
          dispatch(authSlice.actions.SET_AUTH(true));
          dispatch(authSlice.actions.SET_IS_LOADING(false));
        } else {
          dispatch(authSlice.actions.SET_ERROR('Неверный логин или пароль'));
          dispatch(authSlice.actions.SET_IS_LOADING(false));
        }
      }, 500);

    } catch (e: unknown) {
      dispatch(authSlice.actions.SET_ERROR('Произошла ошибка при логине'));
      dispatch(authSlice.actions.SET_IS_LOADING(false));
    }
  }
);




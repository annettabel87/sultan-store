import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calculateTotalPrice } from "../common/helpers";

export interface IBasketItem {
  id: number;
  urlImg: string;
  title: string;
  sizeType: string;
  size: string;
  description: string;
  price: number;
  quantity: number;
}

interface IBasketState {
  basket: IBasketItem[],
  totalPrice: number,
  countItems: number
}
export const initialState: IBasketState = {
  basket: [],
  totalPrice: 0,
  countItems: 0
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    ADD_ITEM(state, action: PayloadAction<IBasketItem>) {
      const findItem = state.basket.find(item => item.id === action.payload.id);
      findItem ? findItem.quantity++ :
        state.basket.push(action.payload);
      state.totalPrice = calculateTotalPrice(state.basket);
      state.countItems = state.basket.length;
    },
    ADD_ONE_ITEM(state, action: PayloadAction<IBasketItem>) {
      const findItem = state.basket.find(item => item.id === action.payload.id);
      findItem ? findItem.quantity = action.payload.quantity :
        state.basket.push(action.payload);
      state.totalPrice = calculateTotalPrice(state.basket);
      state.countItems = state.basket.length;
    },
    REMOVE_ITEM(state, action: PayloadAction<number>) {
      state.basket = state.basket.filter(item => item.id !== action.payload);
      state.totalPrice = calculateTotalPrice(state.basket);
      state.countItems = state.basket.length;
    },
    CLEAR_BASKET(state) {
      state.basket = [];
      state.totalPrice = 0;
      state.countItems = 0;
    },
  },
  extraReducers: {},
});

export const {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_BASKET,
  ADD_ONE_ITEM
} = basketSlice.actions;
export default basketSlice.reducer;

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
  totalPrice: number
}
export const initialState: IBasketState = {
  basket: [],
  totalPrice: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    ADD_ITEM(state, action: PayloadAction<IBasketItem>) {
      const findItem = state.basket.find(item => item.id === action.payload.id);
      findItem ? findItem.quantity++ :
        state.basket.push(action.payload);
      state.totalPrice = calculateTotalPrice(state.basket)
    },
    REMOVE_ITEM(state, action: PayloadAction<number>) {
      delete state.basket[action.payload]
    },
    CLEAR_BASKET(state) {
      state.basket = [];
      state.totalPrice = 0;
    },
  },
  extraReducers: {},
});

export const {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_BASKET,
} = basketSlice.actions;
export default basketSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FILTERSNAME, SORTNAMES } from "../common/helpers";

interface ICatalogState {
  filter: FILTERSNAME | "";
  sortValue: SORTNAMES | "";
}

export const initialState: ICatalogState = {
  filter: "",
  sortValue: "",
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    SET_FILTER(state, action: PayloadAction<FILTERSNAME | "">) {
      state.filter = action.payload;
    },
    SET_SORTVALUE(state, action: PayloadAction<SORTNAMES | "">) {
      state.sortValue = action.payload;
    },
  },
  extraReducers: {},
});

export const { SET_FILTER, SET_SORTVALUE } = catalogSlice.actions;
export default catalogSlice.reducer;

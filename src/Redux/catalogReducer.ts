import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FILTERSNAME } from "../common/helpers";


interface ICatalogState {
    filter: FILTERSNAME | '',
}

export const initialState : ICatalogState = {
    filter: ''
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        SET_FILTER(state, action: PayloadAction<FILTERSNAME | ''>) {
            state.filter = action.payload;
          },
    },
    extraReducers: {}
})

export const { SET_FILTER } = catalogSlice.actions;
export default catalogSlice.reducer;
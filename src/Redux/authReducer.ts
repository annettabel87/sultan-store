import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_KEYS } from "../common/constants";

export interface IUser {
  username: string;
  password: string;
}

interface IAuthState {
  isAuth: boolean,
  user: IUser,
  isLoading: boolean,
  error: string
}
export const initialState: IAuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: ''
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_AUTH(state, action: PayloadAction<boolean>) {
      state.error = '';
      state.isAuth = action.payload;
      state.isLoading = false;
    },
    SET_USER(state, action: PayloadAction<IUser>) {
      state.error = '';
      state.user = action.payload;
    },
    SET_ERROR(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    SET_IS_LOADING(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    LOGOUT(state) {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.USERNAME);
      state.user=  {} as IUser;
      state.isAuth = false;
    },
  },
});

export const {
  SET_AUTH,
  SET_USER,
  SET_ERROR,
  SET_IS_LOADING,
  LOGOUT
} = authSlice.actions;
export default authSlice.reducer;

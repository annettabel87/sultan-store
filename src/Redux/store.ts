import { combineReducers, configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./catalogReducer";
import basketReducer from "./basketReducer";
import authReducer from "./authReducer";


export const rootReducer = combineReducers({
    catalogReducer,
    basketReducer,
    authReducer
  });

  const store = configureStore({
    reducer: rootReducer,
  })

  export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
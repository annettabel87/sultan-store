import { combineReducers, configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./catalogReducer";
import basketReducer from "./basketReducer";


export const rootReducer = combineReducers({
    catalogReducer,
    basketReducer,
  });

  const store = configureStore({
    reducer: rootReducer,
  })

  export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
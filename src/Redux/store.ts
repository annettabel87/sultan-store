import { PreloadedState, combineReducers, configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./catalogReducer";
import basketReducer from "./basketReducer";
import authReducer from "./authReducer";


export const rootReducer = combineReducers({
    catalogReducer,
    basketReducer,
    authReducer
  });

  export const createReduxStore = (preloadedState?: PreloadedState<RootState>) => {
    return  configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}
export const store = createReduxStore();
export type AppStore = ReturnType<typeof createReduxStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import catalogReducer from './catalogReducer';

export const rootReducer = combineReducers({
    catalogReducer,    
  });

  const store = configureStore({
    reducer: rootReducer,
  })
  
  export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
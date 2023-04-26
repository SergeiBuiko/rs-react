import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UseSlice';
import formPageSlice from './reducers/fromSlice';

const rootReducer = combineReducers({
  userReducer,
  formPageSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

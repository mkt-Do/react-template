import { combineReducers, configureStore } from '@reduxjs/toolkit';

import counterReducer from '~/stores/counterSlice';

const reducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof reducer>;
export const store = configureStore({ reducer });

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import rootReducer from '../reducers';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter1: rootReducer
  },
});

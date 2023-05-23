import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/usersSlice';

export const store = configureStore({
  reducer: {
    users: userReducer
  }
});

// create types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
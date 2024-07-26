import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Define the RootState type
export type StoreRootState = ReturnType<typeof store.getState>;
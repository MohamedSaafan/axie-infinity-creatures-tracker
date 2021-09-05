import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import axieSlice from "../features/axies/axieSlice";
import scholarSlice from "../features/scholars/scholarSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    axies: axieSlice,
    scholars: scholarSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

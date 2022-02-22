import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import axieSlice from "../features/axies/axieSlice";
import scholarSlice from "../features/scholars/scholarSlice";
import teamsSlice from "../features/teams/teamsSlice";
import searchBarSlice from "../features/search-bar/search-barSlice";
import withAuthSlice from "../HOC/withAuth/withAuthSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    axies: axieSlice,
    scholars: scholarSlice,
    teams: teamsSlice,
    searchBar: searchBarSlice,
    password: withAuthSlice,
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

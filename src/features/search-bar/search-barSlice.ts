import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  keyword: string;
}

const initialState: State = { keyword: "" };

const searchBarSlice = createSlice({
  name: "searchkeyword",
  initialState,
  reducers: {
    changeKeword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
  },
});
export const { changeKeword } = searchBarSlice.actions;
export default searchBarSlice.reducer;

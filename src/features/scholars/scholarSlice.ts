import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
interface State {
  status: "idle" | "pending" | "rejected";
  values: ScholarType[];
  error: Error | null;
}
const initialState: State = {
  status: "idle",
  values: [],
  error: null,
};

export const loadScholarsAsync = createAsyncThunk(
  "axies/fetchCount",
  async () => {
    const response = await fetch(
      "https://068zjqi5jb.execute-api.us-east-2.amazonaws.com/dev/scholars"
    );
    const data = await response.json();
    return data;
  }
);

const scholarSlice = createSlice({
  initialState,
  name: "scholars",
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(
        loadScholarsAsync.fulfilled,
        (state, action: PayloadAction<ScholarType[]>) => {
          state.status = "idle";
          state.values = action.payload;
          state.error = null;
        }
      )
      .addCase(loadScholarsAsync.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(loadScholarsAsync.pending, (state, action) => {
        state.status = "pending";
      });
  },
});

export default scholarSlice.reducer;

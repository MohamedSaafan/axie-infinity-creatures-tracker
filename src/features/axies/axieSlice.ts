import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
interface State {
  status: "idle" | "pending" | "rejected";
  values: AxieType[];
  error: Error | null;
}
const initialState: State = {
  status: "idle",
  values: [],
  error: null,
};

export const loadAxiesAsync = createAsyncThunk("axies/fetchCount", async () => {
  const response = await fetch(
    "https://068zjqi5jb.execute-api.us-east-2.amazonaws.com/dev/axies"
  );
  const data = await response.json();
  return data;
});

const axieSlice = createSlice({
  initialState,
  name: "axies",
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(
        loadAxiesAsync.fulfilled,
        (state, action: PayloadAction<AxieType[]>) => {
          state.status = "idle";
          state.values = action.payload;
          state.error = null;
        }
      )
      .addCase(loadAxiesAsync.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(loadAxiesAsync.pending, (state, action) => {
        state.status = "pending";
      });
  },
});

export default axieSlice.reducer;

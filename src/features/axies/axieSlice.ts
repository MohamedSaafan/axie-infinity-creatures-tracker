import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Axies from ".";
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
  if (Array.isArray(data)) return data;
  return [];
});
export const addAxieAsync = createAsyncThunk(
  "axies/addAxie",
  async (
    { axie, callback }: { axie: AxieType; callback: () => void },
    { dispatch, rejectWithValue }
  ) => {
    try {
      console.log("from add axie slice");
      const result = await fetch(
        "https://068zjqi5jb.execute-api.us-east-2.amazonaws.com/dev/axies",
        {
          method: "POST",
          body: JSON.stringify(axie),
        }
      );
      if (result.status === 200) dispatch(axieSlice.actions.addAxie(axie));
      callback();
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
export const deleteAxieAsync = createAsyncThunk(
  "axie/deleteAxie",
  async (
    { id, callback }: { id: number; callback: () => void },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const result = await fetch(
        `https://068zjqi5jb.execute-api.us-east-2.amazonaws.com/dev/axies/${id}`,
        {
          method: "DELETE",
        }
      );
      if (result.status === 200) dispatch(axieSlice.actions.deleteAxie(id));
      callback();
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
export const editAxieAsync = createAsyncThunk(
  "axies/editAxie",
  async (
    { axie, callback }: { axie: AxieType; callback: () => void },
    { dispatch, rejectWithValue }
  ) => {
    // handle the existence of all the axie properties if it wasn't found

    const copiedAxies = { ...axie };

    if (!copiedAxies.breed_count) copiedAxies.breed_count = 0;
    if (!copiedAxies.children) copiedAxies.children = "";
    if (!copiedAxies.parent1) copiedAxies.parent1 = "";
    if (!copiedAxies.parent2) copiedAxies.parent2 = "";
    if (!copiedAxies.siblings) copiedAxies.siblings = "";
    try {
      const result = await fetch(
        `https://068zjqi5jb.execute-api.us-east-2.amazonaws.com/dev/axies/${axie.id}`,
        {
          method: "PUT",
          body: JSON.stringify(copiedAxies),
        }
      );
      if (result.status === 200) dispatch(axieSlice.actions.updateAxie(axie));
      callback();
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

const axieSlice = createSlice({
  initialState,
  name: "axies",
  reducers: {
    addAxie: (state, action: PayloadAction<AxieType>) => {
      state.values.push(action.payload);
      state.values.sort(
        (item1, item2) => +item1.scholar_id - +item2.scholar_id
      );
    },
    deleteAxie: (state, action: PayloadAction<number>) => {
      state.values = state.values.filter((item) => item.id !== action.payload);
      state.values.sort(
        (item1, item2) => +item1.scholar_id - +item2.scholar_id
      );
    },
    updateAxie: (state, action: PayloadAction<AxieType>) => {
      const filteredValues = state.values.filter(
        (item) => item.id !== action.payload.id
      );
      state.values = [action.payload, ...filteredValues];
      state.values.sort(
        (item1, item2) => +item1.scholar_id - +item2.scholar_id
      );
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(
        loadAxiesAsync.fulfilled,
        (state, action: PayloadAction<AxieType[]>) => {
          state.status = "idle";
          state.values = action.payload;
          state.values.sort(
            (item1, item2) => +item1.scholar_id - +item2.scholar_id
          );
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

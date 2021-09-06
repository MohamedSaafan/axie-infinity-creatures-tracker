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
  "scholars/fetchCount",
  async () => {
    const response = await fetch(
      "https://068zjqi5jb.execute-api.us-east-2.amazonaws.com/dev/scholars"
    );
    const data = await response.json();
    return data;
  }
);

export const addScholarAsync = createAsyncThunk(
  "scholars/addScholar",
  async (
    { scholar, callback }: { scholar: ScholarType; callback: () => void },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const result = await fetch(
        "https://068zjqi5jb.execute-api.us-east-2.amazonaws.com/dev/scholars",
        {
          method: "POST",
          body: JSON.stringify(scholar),
        }
      );
      if (result.status === 200)
        dispatch(scholarSlice.actions.addScholar(scholar));
      callback();
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
export const deleteScholarAsync = createAsyncThunk(
  "scholars/deleteScholar",
  async (
    { id, callback }: { id: number; callback: () => void },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const result = await fetch(
        `https://068zjqi5jb.execute-api.us-east-2.amazonaws.com/dev/scholars/${id}`,
        {
          method: "DELETE",
        }
      );
      if (result.status === 200)
        dispatch(scholarSlice.actions.deleteScholar(id));
      callback();
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
export const editScholarAsync = createAsyncThunk(
  "scholars/editScholarAsync",
  async (
    { scholar, callback }: { scholar: ScholarType; callback: () => void },
    { dispatch, rejectWithValue }
  ) => {
    try {
      console.log(JSON.stringify(scholar), "from stringify");
      const result = await fetch(
        `https://068zjqi5jb.execute-api.us-east-2.amazonaws.com/dev/scholars/${scholar.id}`,
        {
          method: "PUT",
          body: JSON.stringify(scholar),
        }
      );
      if (result.status === 200)
        dispatch(scholarSlice.actions.updateScholar(scholar));
      callback();
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

const scholarSlice = createSlice({
  initialState,
  name: "scholars",
  reducers: {
    addScholar: (state, action: PayloadAction<ScholarType>) => {
      state.values.push(action.payload);
    },
    deleteScholar: (state, action: PayloadAction<number>) => {
      state.values = state.values.filter((item) => item.id !== action.payload);
    },
    updateScholar: (state, action: PayloadAction<ScholarType>) => {
      const filteredValues = state.values.filter(
        (item) => item.id !== action.payload.id
      );
      state.values = [action.payload, ...filteredValues];
      console.log([action.payload, ...filteredValues], "after the update");
    },
  },
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
      .addCase(
        loadScholarsAsync.rejected,
        (state, action: PayloadAction<any>) => {
          state.status = "rejected";
          state.error = action.payload;
        }
      )
      .addCase(loadScholarsAsync.pending, (state, action) => {
        state.status = "pending";
      });
  },
});

export default scholarSlice.reducer;

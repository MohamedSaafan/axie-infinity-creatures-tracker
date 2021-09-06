import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  status: "idle" | "pending" | "rejected";
  values: TeamType[];
  error: Error | null;
}
const initialState: State = {
  status: "idle",
  values: [],
  error: null,
};

export const loadTeamAsync = createAsyncThunk("teams/fetchTeams", async () => {
  const response = await fetch(
    "https://068zjqi5jb.execute-api.us-east-2.amazonaws.com/dev/teams"
  );
  const data = await response.json();
  return data;
});

export const addTeamAsync = createAsyncThunk(
  "teams/addTeam",
  async (
    { team, callback }: { team: TeamType; callback: () => void },
    { dispatch, rejectWithValue }
  ) => {
    try {
      console.log("from add team slice");
      const result = await fetch(
        "https://068zjqi5jb.execute-api.us-east-2.amazonaws.com/dev/teams",
        {
          method: "POST",
          body: JSON.stringify(team),
        }
      );
      if (result.status === 200) dispatch(teamSlice.actions.addTeam(team));
      callback();
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
export const deleteTeamAsync = createAsyncThunk(
  "team/deleteTeam",
  async (
    { id, callback }: { id: number; callback: () => void },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const result = await fetch(
        `https://068zjqi5jb.execute-api.us-east-2.amazonaws.com/dev/teams/${id}`,
        {
          method: "DELETE",
        }
      );
      if (result.status === 200) dispatch(teamSlice.actions.deleteTeam(id));
      callback();
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
export const editTeamAsync = createAsyncThunk(
  "teams/editTeam",
  async (
    { team, callback }: { team: TeamType; callback: () => void },
    { dispatch, rejectWithValue }
  ) => {
    try {
      console.log(JSON.stringify(team), "from stringify");
      const result = await fetch(
        `https://068zjqi5jb.execute-api.us-east-2.amazonaws.com/dev/teams/${team.id}`,
        {
          method: "PUT",
          body: JSON.stringify(team),
        }
      );
      if (result.status === 200) dispatch(teamSlice.actions.updateTeam(team));
      callback();
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

const teamSlice = createSlice({
  initialState,
  name: "teams",
  reducers: {
    addTeam: (state, action: PayloadAction<TeamType>) => {
      state.values.push(action.payload);
    },
    deleteTeam: (state, action: PayloadAction<number>) => {
      state.values = state.values.filter((item) => item.id !== action.payload);
    },
    updateTeam: (state, action: PayloadAction<TeamType>) => {
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
        loadTeamAsync.fulfilled,
        (state, action: PayloadAction<TeamType[]>) => {
          state.status = "idle";
          state.values = action.payload;
          state.error = null;
        }
      )
      .addCase(loadTeamAsync.rejected, (state, action: PayloadAction<any>) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(loadTeamAsync.pending, (state, action) => {
        state.status = "pending";
      });
  },
});

export default teamSlice.reducer;

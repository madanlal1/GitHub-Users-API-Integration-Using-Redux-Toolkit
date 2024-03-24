import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk("githubUsers", async () => {
  const response = await fetch("https://api.github.com/users");
  return response.json();
});

const githubUserSlice = createSlice({
  name: "githubUsers",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {}, // Empty reducers object
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default githubUserSlice; // Destructuring the exported values

// src/features/users/usersSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  email: string;
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
});

interface UsersState {
  list: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: UsersState = {
  list: [],
  status: "idle",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => { state.status = "loading" })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => { state.status = "failed" });
  },
});

export default usersSlice.reducer;

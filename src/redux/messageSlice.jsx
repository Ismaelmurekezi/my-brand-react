import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllMessages = createAsyncThunk("getAllMessages", async () => {
  const res = await fetch(
    "https://my-brand-backend-ibtm.onrender.com/api/messages/getAllMessages"
  );
  return await res.json();
});

const messageSlice = createSlice({
  name: "message",
  initialState: {
    isLoading: false,
    res: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMessages.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllMessages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.res = action.payload;
    });
    builder.addCase(getAllMessages.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export const { reducer: messageReducer } = messageSlice;
export default messageSlice;

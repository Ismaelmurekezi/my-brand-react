import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBlog = createAsyncThunk("fetchBlog", async () => {
  const data = await fetch(
    "https://my-brand-backend-ibtm.onrender.com/api/blog/getAllBlogs"
  );
  return data.json();
});
const blogSlice = createSlice({
  name: "blog",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlog.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchBlog.rejected, (state, action) => {
      state.error = true;
    });
  },
});
export const { reducer: blogReducer } = blogSlice;
export default blogSlice;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const token = localStorage.getItem("token");

//  thunk to add a like to a blog post
export const addLike = createAsyncThunk(
  "blogInteraction/addLike",
  async (blogId) => {

    const response = await fetch(`https://my-brand-backend-ibtm.onrender.com/api/blog/${blogId}/like`, {
      method: "POST",
      headers: {
            "Authorization": `Bearer ${token}`
      }
    });
    return response.json();
  }
);

//  thunk to add a comment to a blog post
export const addComment = createAsyncThunk(
  "blogInteraction/addComment",
  async ({ blogId, commentData }) => {

    const response = await fetch(`https://my-brand-backend-ibtm.onrender.com/api/blog/${blogId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(commentData),
    });
    return response.json();
  }
);

// Create blog interaction slice
const blogInteractionSlice = createSlice({
  name: "blogInteraction",
  initialState: {
    isLoading: false,
    error: null,
    success:""
  },
  extraReducers: (builder) => {
    builder
      .addCase(addLike.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addLike.fulfilled, (state, action) => {
        state.isLoading = false;
     
      })
      .addCase(addLike.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; 
      })
      .addCase(addComment.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.isLoading = false;
        
      })
      .addCase(addComment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; 
      });
  },
});


export const { reducer: blogInteractionReducer } = blogInteractionSlice;
export default blogInteractionSlice;

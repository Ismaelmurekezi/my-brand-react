import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const token=localStorage.getItem("token");

//  create a new blog post
export const createBlog = createAsyncThunk(
  "blogManagement/createBlog",
  async (formData) => {
    const token = localStorage.getItem("token");
    const response = await fetch("https://my-brand-backend-ibtm.onrender.com/api/blog/create", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: formData,
    });
    return response.json();
  }
);


//  delete a blog post
export const deleteBlog = createAsyncThunk(
  "blogManagement/deleteBlog",
  async (blogId) => {

    const response = await fetch(`https://my-brand-backend-ibtm.onrender.com/api/blog/delete/${blogId}`, {
      method: "DELETE",
      headers: {
         "Authorization": `Bearer ${token}`
      }
    });
    
    return response.json();
  }
);

//  update a blog post
export const updateBlog = createAsyncThunk(
  "blogManagement/updateBlog",
  async ({ blogId, updatedData }) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`https://my-brand-backend-ibtm.onrender.com/api/blog/update/${blogId}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: updatedData, 
    });
    return response.json();
  }
);

// Create blog management slice
const blogManagementSlice = createSlice({
  name: "blogManagement",
  initialState: {
    isLoading: false,
    error: null,
     editing: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBlog.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.isLoading = false;
       
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; 
      })
      .addCase(deleteBlog.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.isLoading = false;
       
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; 
      })
      .addCase(updateBlog.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.isLoading = false;
       
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; 
      });
  },
});


export const { reducer: blogManagementReducer } = blogManagementSlice;
export default blogManagementSlice;
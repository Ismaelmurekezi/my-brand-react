import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const getUser = createAsyncThunk("getUser", async (blogId) => {
    fetch(`https://my-brand-backend-ibtm.onrender.com/api/user/getUserById/${blogId}`); 
})
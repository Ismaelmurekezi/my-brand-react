import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {useNavigation} from 'react-router-dom'

// Async Thunk to handle form submission
export const signUpUser = createAsyncThunk(
  'signup/signUpUser',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch("https://my-brand-backend-ibtm.onrender.com/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || "Failed to register user");
      }

        const data = await response.json();
        alert("created")
      return data;
    } catch (error) {
      return rejectWithValue("An error occurred while registering user");
    }
  }
);

export const loginUser = createAsyncThunk(
  'signup/loginUser',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch("https://my-brand-backend-ibtm.onrender.com/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert("try again")
          return rejectWithValue(errorData.message || "Failed to log in");
      }

      const userData = await response.json();
      alert("Login Successfull")
         if (userData.email === 'ismael@gmail.com') {
        // Redirect to admin page
           window.location.href = '/dashboard/blogdashboard';
      
      } else {
        // Redirect normal user to home page
           window.location.href = '/home';
      }
      
      localStorage.setItem("token", userData.token);
      localStorage.setItem("loggedUser", JSON.stringify(userData));
      setTokenExpiration(1); 

      return userData;
      
    } catch (error) {
      return rejectWithValue("An error occurred while logging in");
    }
  }
);

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  const data = await fetch(
    "https://my-brand-backend-ibtm.onrender.com/api/user/getAllUsers"
  );
  return data.json();
});


// Slice for signup form state
const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    username: '',
    email: '',
    password: '',
      confirmPassword: '',
    loading: false,
    error: null,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to register user";
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
       state.data = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
      
      });
  },
});

export const { setUsername, setEmail, setPassword, setConfirmPassword } = signupSlice.actions;

export default signupSlice.reducer;

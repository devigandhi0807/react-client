import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL+'/users/' ;

export const register = createAsyncThunk('auth/register',async (userData,thunkAPI) => {
  try {
    const response = await axios.post(baseUrl+'register',userData);
    if (!response.data.error) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data;
  } catch (error) {
    const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()

        return thunkAPI.rejectWithValue(message)
  }
  })
export const login = createAsyncThunk('auth/login',async (userData,thunkAPI) => {
  try {
    const response = await axios.post(baseUrl+'login',userData);
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data;
  } catch (error) {
    const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
  }
  })

 export const logout =  createAsyncThunk('auth/logout', async () => {
  await  localStorage.removeItem('user')
})



import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL+"/contactsheet/"
//load contactsheet data from nest-api

export const getAllContactsheets =createAsyncThunk('contactsheet/getAll',async(_,thunkAPI)=>{
  try{
    const response = await axios.get(baseUrl);
    return response.data
  }catch(error){
    const msg = (error.response&&error.response.data&&error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(msg)
  }
});

// Create new goal
export const createContactsheet = createAsyncThunk(
  'contactsheet/create',
  async (sheetData, thunkAPI) => {
    try {
       const response = await axios.post(baseUrl, sheetData)
       return response.data
    } catch (error) {
      const msg =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(msg)
    }
  }
)

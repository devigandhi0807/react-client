import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout } from "./authAPIService";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))
const initialState={
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  msg:''
}




export const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    reset:(state)=>initialState
  },
  extraReducers:(builder)=>{
    builder
    .addCase(register.pending,(state)=>{
      state.isLoading = true
    })
    .addCase(register.fulfilled,(state,action)=>{
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
    })
    .addCase(register.rejected,(state,action)=>{
        state.isLoading = false
        state.isError = true
        state.msg = action.payload
        state.user = null
    })
    .addCase(login.pending, (state) => {
      state.isLoading = true
    })
    .addCase(login.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
    })
    .addCase(login.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.msg = action.payload
      state.user = null
    })
    .addCase(logout.fulfilled,(state)=>{
      state.user = null
    })
  }
})

export const {reset} = authSlice.actions;
export default authSlice.reducer;

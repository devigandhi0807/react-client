import { createSlice } from "@reduxjs/toolkit";
import { getAllContactsheets,createContactsheet } from "./contactsheetAPIService";





const initialState ={
  contacts:[],
  isSuccess:false,
  isError:false,
  isLoading:false,
  msg:''
}

export const contactsheetsSlice=createSlice({
  name:'contactsheet',
  initialState,
  reducers:{
    reset:(state)=>initialState
  },
  extraReducers:(builder)=>{
    builder
    .addCase(createContactsheet.pending, (state) => {
      state.isLoading = true
    })
    .addCase(createContactsheet.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.contacts.push(action.payload)
    })
    .addCase(createContactsheet.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.msg = action.payload
    })
    .addCase(getAllContactsheets.pending,(state)=>{
      state.isLoading=true
    })
    .addCase(getAllContactsheets.fulfilled,(state,action)=>{
      state.isLoading=false
      state.isSuccess=true
      state.contacts=action.payload
    })
    .addCase(getAllContactsheets.rejected,(state,action)=>{
      state.isLoading=false
      state.isError=true
      state.msg=action.payload
    })
  }
})
export const {reset} = contactsheetsSlice.actions
export default contactsheetsSlice.reducer

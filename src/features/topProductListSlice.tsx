import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "./types";
import api from "../api"

export const getTopProductsList=createAsyncThunk<ProductType['products']>(
   "top_products/getTopProductsList",
  async () => {
      const res =await api.get('api/top-products/');
      const result:ProductType['products']=res.data;
      return result;
  }
)

const initialState:ProductType ={
    products:[],
    isLoading:false,
    error:null
}




const topProductSlice=createSlice({
    name:"top_products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getTopProductsList.pending, (state)=>{
             state.isLoading=true;
             state.error=null
        })
        .addCase(getTopProductsList.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.products.push(...action.payload)
            state.error=null
        })
        .addCase(getTopProductsList.rejected, (state, action)=>{
            state.isLoading=false;
            state.error = action.error.message || ""
        })
    }

})

export default topProductSlice.reducer;
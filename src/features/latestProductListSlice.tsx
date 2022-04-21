import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "./types";
import api from "../api"

export const getLatestProducts=createAsyncThunk<ProductType['products']>(
   "products/getLatestProducts",
  async () => {
      const res =await api.get('api/latest-products/');
      const result:ProductType['products']=res.data;
      return result;
  }
)

const initialState:ProductType ={
    products:[],
    isLoading:false,
    error:null
}




const latestProductSlice=createSlice({
    name:"latest_products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getLatestProducts.pending, (state)=>{
             state.isLoading=true;
             state.error=null
        })
        .addCase(getLatestProducts.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.products.push(...action.payload)
            state.error=null
        })
        .addCase(getLatestProducts.rejected, (state, action)=>{
            state.isLoading=false;
            state.error = action.error.message || ""
        })
    }

})

export default latestProductSlice.reducer;
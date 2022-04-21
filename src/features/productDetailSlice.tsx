import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductDetailState } from "./types";
import api from "../api";


export const getProductDetail=createAsyncThunk(
    "product/getProductDetail",
   async (itemId:number) => {
       const response=await api.get(`api/products/${itemId}/`)
       const data: ProductDetailState['product']= response.data
       return data;
   }
)

const initialState:ProductDetailState={
 product:{
    id:0,
    name:"",
    image:"",
    description:"",
    rating:"",
    numReviews:0,
    brand:"",
    category:"",
    price:0.00,
    countInstock:0,  
    thumbnails:[],
    variations:[]
 },
 status:false,
 error:null
}


const productDetailSlice=createSlice({
  name:'product',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
      builder
      .addCase(getProductDetail.pending, (state)=>{
          state.status=true
          state.error=null
      })
      .addCase(getProductDetail.fulfilled, (state, action)=>{
          state.status=false
          state.product=action.payload
          state.error=null
      })
      .addCase(getProductDetail.rejected, (state, action)=>{
          if(action.error){
              state.status=false
              state.error=action.error.message || ""

          }
      })
  }  
})


export default productDetailSlice.reducer;


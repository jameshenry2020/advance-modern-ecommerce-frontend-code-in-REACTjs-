import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";
import {CartReturnType } from "./types";

export const getCartData=createAsyncThunk(
    'cart/getCartData',
   async () => {
      const res=await api.get('api/fetch-order-summary/')
      const result:CartReturnType=res.data
      return result

   }
)

export const checkDefaultAddress=createAsyncThunk(
    'cart/checkDefaultAddress',
   async () => {
      const res=await api.get('api/has-default-address/')
      const result:AddressCheckType=res.data
      return result

   }
)

export const getDeliveryAddress=createAsyncThunk(
    'cart/getDeliveryAddress',
   async () => {
      const res=await api.get('api/retrieve-address/')
      const result:DeliveryAddressType=res.data
      return result

   }
)


interface DeliveryAddressType{
    country:string,
    city:string,
    address:string
}

interface AddressCheckType{
    HasDefaultAddress:boolean,
    address:string
}




interface cartState{
    cart:CartReturnType,
    shipping:AddressCheckType,
    delivery_addr:DeliveryAddressType,
    loading:boolean,
    error:string
}

const initialState: cartState={
    cart:{
        id:0,
        order_items:[],
        total:0
    },
    shipping:{
        HasDefaultAddress:false,
        address:""
        
    },
    delivery_addr:{
        country:"",
        city:"",
        address:""
    },
    loading:false,
    error:""
}



const shoppingCartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getCartData.pending, (state)=>{
            state.loading=true
        })
        .addCase(getCartData.fulfilled, (state, action)=>{
            state.loading=false
            state.cart=action.payload

        })
        .addCase(getCartData.rejected, (state, action)=>{
            state.loading=false
            state.error=action.error.message || ""
        })
        // actions for shipping check
        .addCase(checkDefaultAddress.pending, (state)=>{
            state.loading=true
        })
        .addCase(checkDefaultAddress.fulfilled, (state, action)=>{
            state.loading=false
            state.shipping=action.payload

        })
        .addCase(checkDefaultAddress.rejected, (state, action)=>{
            state.loading=false
            state.error=action.error.message || ""
        })
        // Retrieve Delivery Info
        .addCase(getDeliveryAddress.pending, (state)=>{
            state.loading=true
        })
        .addCase(getDeliveryAddress.fulfilled, (state, action)=>{
            state.loading=false
            state.delivery_addr=action.payload

        })
        .addCase(getDeliveryAddress.rejected, (state, action)=>{
            state.loading=false
            state.error=action.error.message || ""
        })

    }
})


export default shoppingCartSlice.reducer
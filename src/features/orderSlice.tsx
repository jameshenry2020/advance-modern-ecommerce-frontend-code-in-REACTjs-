import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { TransactionType } from "./types"
import api from "../api"

export const getPaymentHistory=createAsyncThunk(
    "user_order/getPaymentHistory",
   async () => {
       const response=await api.get('api/transaction-history/')
       const result:TransactionType=response.data
       return result
   }
)



type OrderState={
    payment_history:TransactionType,
    isLoading:boolean,
    isError:boolean
    errorMessage:string 
}


const initialState:OrderState={
      payment_history:{
          id:0,
          amount:0.00,
          timestamp:""
      },
      isLoading:false,
      isError:false,
      errorMessage:""
}


const orderSlice=createSlice({
    name:'user_order',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getPaymentHistory.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(getPaymentHistory.fulfilled, (state, action)=>{
            state.isLoading=false
            state.isError=false
            state.payment_history=action.payload
        })
        .addCase(getPaymentHistory.rejected, (state, action)=>{
            state.isLoading=false
            state.isError=true
            state.errorMessage=action.error.message || ""
        })
    }

})


export default orderSlice.reducer;
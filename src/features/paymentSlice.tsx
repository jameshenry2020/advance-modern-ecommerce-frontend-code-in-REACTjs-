import {  createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../api";
import { AxiosError } from "axios";
import {PaymentIntentResponseType} from "./types"
export const createPaymentIntent=createAsyncThunk<
  PaymentIntentResponseType,
  sendDataType,
  {
      rejectValue:IntentError
  }
>(
    "payment/createPaymentIntent",
   async (data, thunkAPI) => {    
     try{
        const response= await api.post('api/create-payment-intent/', data)
        const res:PaymentIntentResponseType=response.data
        return res
     }catch(err:any){
            let error:AxiosError<IntentError>=err;
            if(!error.response){
                throw err
            }
            return thunkAPI.rejectWithValue(error.response.data)    
     }
   
   }
)



// check if user already a credit card detail on our system
export const checkUserHasCardSaved=createAsyncThunk(
    'cart/checkUserHasCardSaved',
   async () => {
      const res=await api.get('api/check-user-saved/')
      const result:cardCheckType=res.data
      return result

   }
)


type cardCheckType={
    card_detail:{
        brand:string,
        checks:{
            address_line1_check:null,
            address_postal_code_check:string | null,
            cvc_check:string
        },
        country: string,
        exp_month: number,
        exp_year: number,
        fingerprint: string,
        funding: string,
        generated_from:null,
        last4: string,
        
    } | null,
    hasCard:boolean
}

type IntentError={
    message:string
}


interface sendDataType{
    order_id:number,
    paymentMethodType:string,
    currency:string

}



interface paymentStateType{
    isLoading:boolean
    intent:PaymentIntentResponseType
    payment_method:cardCheckType
    error:string |null
}


const initialState :paymentStateType ={
    isLoading:false,
    intent:{
        clientSecret:"",
        error:null
    },
    payment_method:{
        card_detail:null,
        hasCard:false
    },
    error:null
}



const paymentSlice=createSlice({
    name:"payment",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(createPaymentIntent.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(createPaymentIntent.fulfilled, (state, action)=>{
            state.isLoading=false
            state.intent=action.payload
        })
        .addCase(createPaymentIntent.rejected, (state,action)=>{
            if(action.payload){
                state.isLoading=false
                state.intent.error =action.payload.message
                
            }else{
                state.isLoading=false
                state.intent.error=action.error.message || ""
                
            }
        })

        .addCase(checkUserHasCardSaved.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(checkUserHasCardSaved.fulfilled, (state, action)=>{
            state.isLoading=false
            state.payment_method=action.payload
        })
        .addCase(checkUserHasCardSaved.rejected, (state,action)=>{
                state.isLoading=false
                state.error=action.error.message || ""
                
        })
    }


})


export default paymentSlice.reducer
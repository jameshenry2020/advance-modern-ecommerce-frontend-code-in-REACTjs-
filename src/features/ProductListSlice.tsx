import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductStateType} from "./types";
import api from "../api";


export const getProductsData = createAsyncThunk<ProductStateType['products']>(  
    "products/getProductsData",
    async () => {    
            const response= await api.get('api/products/');
            const result: ProductStateType['products']=response.data
            return result;          
    }        
)


const initialState:ProductStateType={
    products:[],
    isLoading:false,
    error:null
}

export const productListSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getProductsData.pending, (state)=>{
            state.isLoading=true
            state.error= null
        })
        .addCase(getProductsData.fulfilled,(state, action)=>{
            state.isLoading=false
            state.products.push(...action.payload)
            state.error=null
        })
        .addCase(getProductsData.rejected, (state, action)=>{
            if (action.error){
                state.error=action.error.message || "";
                state.isLoading=false;
            } 
        })
    }
})

export default productListSlice.reducer




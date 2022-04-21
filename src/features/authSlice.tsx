import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SignUpData, AuthError, AuthInputData, PasswordResetInput } from "./types";
import api from "../api";
import { AxiosError } from "axios";



export const loginUser=createAsyncThunk<
     LoginReturnData,
     AuthInputData,
     {
         rejectValue:AuthError
     }
>(
    'authentication/loginUser',
   async (authData, thunkAPI) => {
       try{
        const response= await api.post('api/login/', authData)
        const res:LoginReturnData=response.data
        return res
       }catch(err:any){
           let error:AxiosError<AuthError>=err
           if(!error.response){
            throw err
        }
        return thunkAPI.rejectWithValue(error.response.data)

       }
       
       
   }
)

export const getUserProfile=createAsyncThunk<
     ProfileReturnData    
>(
    'authentication/getUserProfile',
   async () => { 
        const response= await api.get('api/auth/user/')
        const res:ProfileReturnData=response.data
        return res
       }

)



export const createNewUser=createAsyncThunk<
    UserReturnData, 
    SignUpData,
   {  
       rejectValue:AuthError
   }
>(
    "user/createNewUser",   
   async (data, {rejectWithValue}) => {  
       try{
            const response =await api.post('api/auth/signup/', data)
            const res:UserReturnData=response.data
            return res
       }catch(err:any){
           let error:AxiosError<AuthError> =err
           if(!error.response){
               throw err
           }
           return rejectWithValue(error.response.data)

       }
            

   }
)


export const passwordResetRequest=createAsyncThunk<
     PasswordResetRequest,
     PasswordResetInput,
     {
         rejectValue:AuthError
     }
>(
    'authentication/passwordResetRequest',
   async (input, thunkAPI) => {
       try{
        const response= await api.post('api/auth/request-password-reset/', input)
        const res:PasswordResetRequest=response.data
        return res
       }catch(err:any){
           let error:AxiosError<AuthError>=err
           if(!error.response){
            throw err
        }
        return thunkAPI.rejectWithValue(error.response.data)

       }
       
       
   }
)


interface PasswordResetRequest{
    message:string
}


interface UserReturnData{
    id:number,
    email:string,
    first_name:string,
    last_name:string,
    phone:string|number
    isAdmin:boolean | null,
    token:string
}
interface ProfileReturnData{
    id:number,
    email:string,
    first_name:string,
    last_name:string,
    phone:string|number
    isAdmin:boolean | null,
}

export interface LoginReturnData{
    id:number,
    email:string,
    phone:string |number,
    isAdmin:boolean |null,
    first_name:string,
    last_name:string,
    access:string,
    refresh:string,
    token:string
}
interface AuthState{
    user:UserReturnData,
    auth:LoginReturnData,
    profile:ProfileReturnData,
    passwordreset:PasswordResetRequest,
    isAuthenticated:boolean,
    isLoading:boolean,
    isError:boolean,
    error:string | null | undefined,
        
    
    
}


const initialState:AuthState={
    user:{
        id:0,
        email:"",
        first_name:"",
        last_name:"",
        phone:"",
        isAdmin:null,
        token:""
        
        
    },
    auth:{
        id:0,
        email:"",
        phone:"",
        isAdmin:null,
        first_name:"",
        last_name:"",
        access:"",
        refresh:"",
        token:""
    },
    profile:{
       id:0,
       email:"",
       first_name:"",
       last_name:"",
       phone:"",
       isAdmin: null,
    },
    passwordreset:{
        message:""
    },
    isAuthenticated:false,
    isLoading:false,
    isError:false,
    error:null

}

const authenticationSlice=createSlice({
    name:'authentication',
    initialState,
    reducers:{
        logout:(state)=>{
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            state.isAuthenticated=false
            state.error=null

        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createNewUser.pending, (state)=>{
            state.isLoading=true
            state.error=null
            state.isError=false
        })
        .addCase(createNewUser.fulfilled, (state, action)=>{
            state.isLoading=false
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('user', JSON.stringify(action.payload))
            state.user=JSON.parse(localStorage.getItem('user') || "")
            state.isAuthenticated=true
            state.isError=false
            state.error=null
        })
        .addCase(createNewUser.rejected, (state, action)=>{
            if(action.payload){
                state.isLoading=false
                state.isError=true
                state.error =action.payload.errorMessage
                state.isAuthenticated=false
            }else{
                state.isLoading=false
                state.error=action.error.message
                state.isError=true
                state.isAuthenticated=false
            }
        })
        .addCase(loginUser.pending, (state)=>{
            state.isLoading=true
            state.error=null
            state.isError=false
        })
        .addCase(loginUser.fulfilled, (state, action)=>{
            state.isLoading=false
            localStorage.setItem('token', action.payload.access)
            localStorage.setItem('user', JSON.stringify(action.payload))
            state.auth=JSON.parse(localStorage.getItem('user') || "")      
            state.isAuthenticated=true
            state.isError=false
            state.error=null
        })
        .addCase(loginUser.rejected, (state, action)=>{
            if(action.payload){
                state.isLoading=false
                state.isError=true
                state.error =action.payload.errorMessage
                state.isAuthenticated=false
            }else{
                state.isLoading=false
                state.error=action.error.message
                state.isError=true
                state.isAuthenticated=false
            }
        })
        .addCase(getUserProfile.pending, (state)=>{
            state.isLoading=true
            state.error=null
            state.isError=false
        })
        .addCase(getUserProfile.fulfilled, (state, action)=>{
            state.isLoading=false
            state.profile=action.payload
            state.isAuthenticated=true
            state.isError=false
            state.error=null
        })
        .addCase(getUserProfile.rejected, (state, action)=>{
            state.isLoading=false;
            state.isAuthenticated=false;
            state.isError=true
            state.error = action.error.message || ""
        })
        .addCase(passwordResetRequest.pending, (state)=>{
            state.isLoading=true
            state.error=null
            state.isError=false
        })
        .addCase(passwordResetRequest.fulfilled, (state, action)=>{
            state.isLoading=false
            state.passwordreset=action.payload
            state.isAuthenticated=false
            state.isError=false
            state.error=null
        })
        .addCase(passwordResetRequest.rejected, (state, action)=>{
            if(action.payload){
                state.isLoading=false
                state.isError=true
                state.error =action.payload.errorMessage
                state.isAuthenticated=false
            }else{
                state.isLoading=false
                state.error=action.error.message
                state.isError=true
                state.isAuthenticated=false
            }
        })
    }

})


export const {logout}=authenticationSlice.actions
export default authenticationSlice.reducer;



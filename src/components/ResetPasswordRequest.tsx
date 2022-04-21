import React from 'react'
import {useForm} from "react-hook-form"
import { RootState } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import {passwordResetRequest} from "../features/authSlice"
import Loading from './Loading'
import Message from "./Message"

interface ResetData{
    email:string
}

const ResetPasswordRequest = () => {
    const {register, handleSubmit, formState: { errors }}=useForm<ResetData>()
    const dispatch=useDispatch();
    const onSubmit=handleSubmit((data)=>{       
        dispatch(passwordResetRequest(data))
    })
    const austate=useSelector((state:RootState)=> state.authentication)
    const {error, isError, isLoading, passwordreset}=austate
  return (
    <div className='login-container min-h-screen  flex flex-col   max-w-full'>
        <div className="max-w-lg w-full mx-auto">
                <div className="text-center font-medium text-xl">Can't remember your password? we gather you cover!</div>
                <div className="text-center text-3xl font-bold mt-2 text-gray-500">Reset your Password</div>
        </div>
        <div className="max-w-xl w-full mx-auto mt-4 p-8 border bg-white border-gray-300">
                {isLoading && <Loading/>}
                <form action="" onSubmit={onSubmit} className='space-y-6'>
                     <div>
                        <label htmlFor="Email" className='text-sm font-bold text-gray-600 block'>Email</label>
                        <input type="text" {...register('email', {required:true, minLength:6, maxLength:40})} 
                        style={{borderColor: errors.email ? "red":""}}
                        className="w-full border p-2 rounded mt-1 border-gray-300"/>
                        {errors.email && "Email is Invalid"}
                    </div>
                    <small className='text-sm text-gray-600 py-4'>provide your registered email</small>    
                    <div>
                        <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">Submit</button>
                    </div>
                     
                </form>
                <div>
                    {passwordreset.message ? <Message color={'green'}>{passwordreset.message}</Message> : isError ? <Message color={'red'}>{error}</Message> : ""}
                </div>
            </div>
    </div>
  )
}

export default ResetPasswordRequest
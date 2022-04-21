import React, {useEffect} from 'react'
import { RootState } from '../store';
import Message from "./Message"
import {RouteComponentProps, Link} from "react-router-dom"
import { useDispatch,useSelector } from 'react-redux';
import {useForm} from "react-hook-form"
import {createNewUser} from "../features/authSlice";



interface SignUpData{
    first_name:string,
    last_name:string,
    email:string,
    password:string,
    phone:string | number

}

export const Signup= ({location, history}:RouteComponentProps<{}>) => {
    const {register, handleSubmit, formState: { errors }}=useForm<SignUpData>()
    const dispatch=useDispatch();
    const redirect = location.search ? location.search.split('=')[1] : "/"
    const userState=useSelector((state:RootState) => state.authentication)
    const { isError, error}=userState
    const usertoken=localStorage.getItem('token')

    useEffect(()=>{
        if(usertoken!=null){
            history.push(redirect)
        }
    },[history, usertoken, redirect])


    const onSubmit=handleSubmit((data)=>{  
        dispatch(createNewUser(data))
        // redirect to the home page

    })
    return (
        <div className='login-container min-h-screen  flex flex-col   max-w-full'>
            <div className="max-w-lg w-full mx-auto">
                <div className="text-center font-medium text-xl">first time here ?, welcome</div>
                <div className="text-center text-3xl font-bold mt-2 text-gray-500">Create Account</div>
            </div>
            <div className="max-w-xl w-full mx-auto my-4 p-8 border bg-white border-gray-300">
                {isError && <Message color={'red'}>{error}</Message>}
                <form action="" onSubmit={onSubmit} className='space-y-6'>
                      <div>
                        <label htmlFor="FirstName" className='text-sm font-bold text-gray-600 block'>First Name</label>
                        <input type="text" {...register('first_name', {required:true, minLength:3, maxLength:40})} 
                        style={{borderColor: errors.first_name ? "red":""}}
                        className="w-full border p-2 rounded mt-1 border-gray-300"/>
                        {errors.first_name && "First Name is Required"}
                     </div>
                    <div>
                        <label htmlFor="LastName" className='text-sm font-bold text-gray-600 block'>Last Name</label>
                        <input type="text" {...register('last_name', {required:true, minLength:3, maxLength:40})} 
                        style={{borderColor: errors.last_name ? "red":""}}
                        className="w-full border p-2 rounded mt-1 border-gray-300"/>
                        {errors.last_name && "last name is required"}
                    </div>
                    
                    <div>
                        <label htmlFor="Email" className='text-sm font-bold text-gray-600 block'>Email</label>
                        <input type="text" {...register('email', {required:true, minLength:6, maxLength:40})} 
                        style={{borderColor: errors.email ? "red":""}}
                        className="w-full border p-2 rounded mt-1 border-gray-300"/>
                        {errors.email && "Email is Invalid"}
                    </div>
                     <div>
                        <label htmlFor="Phone" className='text-sm font-bold text-gray-600 block'>Phone</label>
                        <input type="text" {...register('phone', {required:true, minLength:10, maxLength:40})} 
                        style={{borderColor: errors.phone ? "red":""}}
                        className="w-full border p-2 rounded mt-1 border-gray-300"/>
                        {errors.phone && "please provide a active phone no"}
                    </div>
                    <div>
                        <label htmlFor="Password" className='text-sm font-bold text-gray-600 block'>Password</label>
                        <input type="text" {...register("password", {required:true, minLength:5})}
                           style={{borderColor: errors.password ? "red":""}}
                          className="w-full border p-2 rounded mt-1 border-gray-300" />
                        {errors.password && "Password is inCorrect"}
                    </div>
                    
                    <div>
                        <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">SignUp</button>
                    </div>
                    <div>
                        <span>already have an account ? <Link to='/login' className='text-blue-400'>Sign In</Link> </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

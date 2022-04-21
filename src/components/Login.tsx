import React, {useEffect} from 'react'
import {useForm} from "react-hook-form"
import {Link, RouteComponentProps} from "react-router-dom";
import { RootState } from '../store';
import { useDispatch,useSelector } from 'react-redux';
import {loginUser} from "../features/authSlice";
import Loading from './Loading';
import Message from './Message';



interface ForData{
    email:string,
    password:string
}

export const Login = ({location, history}:RouteComponentProps<{}>) => {
    const {register, handleSubmit, formState: { errors }}=useForm<ForData>()
    const dispatch=useDispatch();
    const userState=useSelector((state:RootState)=>state.authentication)
    const {isError, error, isLoading}=userState
    const redirect = location.search ? location.search.split('=')[1] : "/"
     const usertoken=localStorage.getItem('token')
    useEffect(()=>{
        if(usertoken!=null){
            history.push(redirect)
        }
    },[history, usertoken, redirect])

    
    const onSubmit=handleSubmit((data)=>{
        dispatch(loginUser(data))
    })
    
    return (

        <div className='login-container min-h-screen  flex flex-col   max-w-full'>
            <div className="max-w-lg w-full mx-auto">
                <div className="text-center font-medium text-xl">welcome to fashionland</div>
                <div className="text-center text-3xl font-bold mt-2 text-gray-500">Login to your Account</div>
            </div>
            <div className="max-w-xl w-full mx-auto mt-4 p-8 border bg-white border-gray-300">
                 {isError && <Message color={'red'}>{error}</Message>}
                <form action="" onSubmit={onSubmit} className='space-y-6'>
                     <div>
                        <label htmlFor="Email" className='text-sm font-bold text-gray-600 block'>Email</label>
                        <input type="text" {...register('email', {required:true, minLength:6, maxLength:40})} 
                        style={{borderColor: errors.email ? "red":""}}
                        className="w-full border p-2 rounded mt-1 border-gray-300"/>
                        {errors.email && "Email is Invalid"}
                    </div>
                    <div>
                        <label htmlFor="Password" className='text-sm font-bold text-gray-600 block'>Password</label>
                        <input type="text" {...register("password", {required:true, minLength:5})}
                           style={{borderColor: errors.password ? "red":""}}
                          className="w-full border p-2 rounded mt-1 border-gray-300" />
                        {errors.password && "Password is inCorrect"}
                    </div>
                    <div>
                        <Link to="/password-reset-request" className="font-medium text-sm text-blue-500">Forget Password</Link>
                    </div>
                    <div>
                        <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">Login</button>
                    </div>
                    <div>
                        <span>Don't have an account yet ? <Link to='/signup' className='text-blue-400'>create account</Link> </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

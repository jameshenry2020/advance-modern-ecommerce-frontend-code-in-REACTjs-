import React, {useEffect} from 'react'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from '../features/authSlice'
import {getPaymentHistory} from '../features/orderSlice'
import { useHistory } from 'react-router-dom'
import { RootState } from '../store'

const UserProfile = () => {
        const history=useHistory();
        const dispatch=useDispatch();
        const isLogin=localStorage.getItem('token')

        useEffect(()=>{
            if(isLogin===null){
                    history.push('/login')
            }else{
                 dispatch(getUserProfile());
                 dispatch()
            }
        },[dispatch, isLogin])

        const user=useSelector((state:RootState)=>state.authentication)
        const {profile, isLoading}=user
          console.log(profile)

        return (
            <>
                    <div className="container flex items-center gap-3 mt-16 px-4 py-4">
                        <a href="#" className="text-red-500 text-base">
                        <i className="fas fa-home"></i>
                        </a>
                        <span className="text-sm text-gray-400">
                        <i className="fas fa-chevron-right"></i>
                        </span>
                        <p className="text-gray-600 font-medium">
                            Dashboard
                        </p>
                </div>

                <div className="container grid grid-cols-12 gap-6 pt-4 px-4 pb-10 items-start">
                    <div className="col-span-4 bg-white px-4 pb-6 shadow rounded overflow-hidden">
                        <div className="divide-y  divide-gray-200 space-y-5">
                            <div>
                                <h3 className='text-xl text-gray-500 mb-3 uppercase font-medium'>User Info</h3>
                                <div className="space-y-2 divide-y divide-solid w-full">
                                    <div className="flex items-center justify-center">
                                        <div className='w-24 h-24'>
                                        <img src="https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png" alt="avatar icon" className='w-full h-full object-cover ' />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-around mb-3">
                                        <div>
                                            <label htmlFor="first" className='text-gray-400'>first name</label>
                                            <p>name 1</p>
                                        </div>
                                        <div>
                                        <label htmlFor="first" className='text-gray-400'>first name</label>
                                            <p>name 2</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-start ml-12 mb-3">
                                        <div>
                                            <label htmlFor="first" className='text-gray-400'>Email</label>
                                            <p>user@email.com</p>
                                        </div>    
                                    </div>
                                    <div className="flex items-center justify-start ml-12 mb-3">
                                        <div>
                                            <label htmlFor="first" className='text-gray-400'>Tel No</label>
                                            <p>977599076</p>
                                        </div>    
                                    </div>
                                    
                                </div>
                            </div>

                            
                        </div>
                    </div>
                    <div className="col-span-8">
                        <div className='grid grid-cols-2'>
                            <div>
                                <h3>Delivery Details</h3>
                            </div>
                            <div> 
                                <h3>Request Refund</h3>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="container grid grid-cols-12 gap-6 pt-4 px-4 pb-16 items-start">
                        <div className="col-span-4  bg-white px-4 pb-6 shadow rounded overflow-hidden">
                        <h3 className='text-xl text-gray-500 py-4 mb-3 uppercase font-medium'>Payment History</h3>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Amount
                                </th>
                                
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Apple MacBook Pro"
                                </th>                     
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Microsoft  Pro
                                </th>
                    
                                <td className="px-6 py-4">
                                    $1999
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                    </div>
                    <div className="col-span-8 h-48 bg-white px-4 pb-6 shadow rounded">
                        <h3>Order Summary</h3>
                    </div>
                    
                </div>
                <Footer/>
            </>
        )
        }

export default UserProfile
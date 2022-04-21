import React, { Fragment, useEffect} from 'react'
import {useForm} from "react-hook-form"
import { RootState } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import {getCartData, checkDefaultAddress} from "../features/cartSlice"
import Loading from './Loading'
import api from "../api"
import {useHistory} from "react-router-dom"

interface AddressType{
  country:string,
  city:string,
  postal_code:string,
  address:string,
  default_add:boolean
}

const DeliveryAddress = () => {
  const dispatch=useDispatch();
  const history=useHistory();
   useEffect(()=>{
        dispatch(getCartData());
        dispatch(checkDefaultAddress());
   },[dispatch])

  const order_summary=useSelector((state:RootState)=> state.shopping_cart)
  const {cart, shipping, loading}=order_summary
  

  const {register, handleSubmit,  formState: { errors }}=useForm<AddressType>()

  const createNewAddress=(data:AddressType)=>{
       api.post('api/add-delivery-address/', data)
       .then(res =>{
          console.log(res.data)
          history.push('/payment')

       }).catch(err =>{
         console.log(err)
       })
  }

  const useDefaultAddress=()=>{
    api.get('api/use-default-address/')
    .then(res =>{
       history.push('/payment')

    }).catch(err =>{
      console.log(err)
    })
}

  const onSubmit=handleSubmit((data)=>{ 
    // dispatch create address action
    createNewAddress(data)   
})
  return (
    <Fragment>
          <div className="container flex items-center gap-3 mt-20 px-4 py-4">
                <a href="/" className="text-red-500 text-base">
                <i className="fas fa-home"></i>
                </a>
                <span className="text-sm text-gray-400">
                <i className="fas fa-chevron-right"></i>
                </span>
                <p className="text-gray-600 font-medium">
                    Delivery Details
                </p>
           </div>
           { loading ? (
             <Loading/>
           ) : (
             <Fragment>
           <div className="container grid grid-cols-12 gap-2 items-start pt-4 pb-16 mx-3">
                <div className="col-span-8 bg-white border border-gray-200 shadow rounded p-4">
                    <h3 className="text-xl font-medium capitalize mb-4 text-center">Shipping Address</h3>
                    <div className="space-y-4">
                         {/* display a simple panel with a button to use default address if available */}
                             { shipping.HasDefaultAddress &&( <div className="flex w-full h-36 items-center mt-8 my-16 mb-8 justify-center">
                                 <div className="w-1/2 rounded-2xl border shadow py-4 px-4 hover:-translate-y-1 hover:shadow-2xl delay-75 duration-100">
                                 <p className="text-sm text-gray-700 font-semibold mt-1"> use previous default address </p>
                                         <p className="text-sm text-gray-700 font-light mt-2 leading-7"> {shipping.address}</p>          
                                      <button className="mt-4 w-full py-3 rounded-xl border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-gray-50" onClick={useDefaultAddress}>
                                        Use 
                                      </button>
                                  </div>

                              </div>
                              )} 
                              

                       <div className="max-w-xl w-full mx-auto my-4 p-8 border bg-white border-gray-300">
                          <form action="" onSubmit={onSubmit}>
                                <div>
                                  <label htmlFor="Country" className='text-sm font-bold text-gray-600 block'>Country</label>
                                  <input type="text" {...register('country', {required:true, minLength:3, maxLength:60})} 
                                  style={{borderColor: errors.country ? "red":""}}
                                  className="w-full border p-2 rounded mt-1 border-gray-300"/>
                                  {errors.country && "First Name is Required"}
                              </div>
                              <div>
                                  <label htmlFor="city" className='text-sm font-bold text-gray-600 block'>City</label>
                                  <input type="text" {...register('city', {required:true, minLength:3, maxLength:50})} 
                                  style={{borderColor: errors.city ? "red":""}}
                                  className="w-full border p-2 rounded mt-1 border-gray-300"/>
                                  {errors.city && "city is required"}
                              </div>
                              
                              <div>
                                  <label htmlFor="Email" className='text-sm font-bold text-gray-600 block'>Postal Code</label>
                                  <input type="text" {...register('postal_code', {required:true, minLength:6, maxLength:40})} 
                                  style={{borderColor: errors.postal_code ? "red":""}}
                                  className="w-full border p-2 rounded mt-1 border-gray-300"/>
                                  {errors.postal_code && "Postal code is required"}
                              </div>
                              <div>
                                  <label htmlFor="Address" className='text-sm font-bold text-gray-600 block'>Apartment Address</label>
                                  <textarea  {...register('address', {required:true, minLength:10, maxLength:200})} 
                                  style={{borderColor: errors.address ? "red":""}}
                                  className="w-full border p-2 rounded mt-1 border-gray-300"/>
                                  {errors.address && "please provide your correct address"}
                              </div> 
                               <div className='mb-4 mt-4'>
                                  <input type="checkbox" value=""  {...register('default_add', {required:false})} id='defaultAddress'
                                  className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                                  <label htmlFor="default_add" className='text-sm font-bold text-gray-600 block'>save as default address</label>
                              </div>
                               
                              <div>
                                  <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">Continue</button>
                              </div>
                          </form>
                      </div>
                    </div>
                </div>
                <div className='col-span-4 bg-white mr-4'>
                      {/* display cart detail here */}
                      <h3 className='py-4 ml-5 text-xl font-medium'>Order Summary</h3><hr />
                      <table className="table-auto">
                        <thead>
                          <tr>
                            <th>Items</th>
                            <th>Qty</th>
                          </tr>
                        </thead>
                      <tbody>
                        {cart.order_items.map(oi => {
                          return(
                            <tr key={oi.id}>
                            <td>
                            <div className='flex flex-wrap'>
                                    <img src={`http://127.0.0.1:8000${oi.item.image}`} className='w-16 h-16' alt="product image" />
                                    <div className=' space-y-2'>
                                        <h5 className='capitalize'>{oi.item.name}</h5>
                                         <div>
                                             {oi.item_variations?.map(itv =>(
                                                     <small key={itv.id}>{itv.variation.name} : <span>{itv.value}, </span></small>
                                                 ))}
                                         </div>
                                        <small>Price: ${oi.item.price}</small><br />
                                    </div>
                                </div>
                            </td>
                            <td>{oi.quantity}</td>  
                           </tr>
                           
                          )
                        })}
                         <hr className='w-full' />
                         <tr className='text-xl font-semibold py-4'>
                          <td>Total:</td>
                          <td>${cart.total}</td>
                        </tr>
                        
              
                      </tbody>
                    </table>
                </div>
           </div>
           </Fragment>
              )}
          
    </Fragment>
  )
}

export default DeliveryAddress
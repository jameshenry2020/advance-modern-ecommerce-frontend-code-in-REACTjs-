import React, { Fragment, useEffect} from 'react'
import { RootState } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import {getCartData, getDeliveryAddress} from "../features/cartSlice"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';
import Loading from './Loading'
import {checkUserHasCardSaved} from "../features/paymentSlice"

import api from "../api"



const promise = loadStripe("pk_test_51IBev4JnWlmnG27uqt62oM3NULHTQYULGaA2BroTxffTYvErhxSqZrerC2mjl8wKEJ8TeqLoEykUiV8A4ibSOOZs00DQBfokyW");


const Payment = () => {
    const dispatch=useDispatch();
    const order_summary=useSelector((state:RootState)=> state.shopping_cart)
    const {cart, delivery_addr, loading}=order_summary

    useEffect(()=>{
      dispatch(getCartData());
      
  },[dispatch])

  const payment=useSelector((state:RootState)=>state.payment)
  const { isLoading}=payment
 
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
              Payment
          </p>
     </div>
     { loading ? (
       <Loading/>
     ) : (
       <Fragment>
        <div className="container grid grid-cols-12 gap-2 items-start pt-4 pb-16 mx-3">
              <div className="col-span-8 bg-white border border-gray-200 shadow rounded p-4">
                  <h3 className="text-xl font-medium capitalize mb-4 text-center">Complete your Order</h3>
                  <div className="space-y-4">
                    <div className="max-w-xl w-full mx-auto my-4 p-8 border bg-white border-gray-300">
                        {/* Stripe payment form */}
                        <Elements stripe={promise}>
                                <CheckoutForm/>
                        </Elements>

                    </div>
                  </div>
              </div>
              <div className='col-span-4 bg-white mr-4'>
                    {/* display order detail here */}
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

                  {/* display shipping details */}
                  <div className='mt-4'>
                    <h3 className='py-4 ml-5 text-xl font-medium'>Delivery Details</h3><hr />

                  </div>

              </div>
        </div>
     </Fragment>
        )}
    
</Fragment>
  )
}

export default Payment








  



  




 


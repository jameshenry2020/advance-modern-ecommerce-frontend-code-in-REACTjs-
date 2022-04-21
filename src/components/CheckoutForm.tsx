import React, {useState, useEffect} from 'react'
import { RootState } from '../store';
import api from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {LoginReturnData} from "../features/authSlice"
import {
  
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import Message from './Message';
import Loading from './Loading';

interface PaymentActionType{
  processing:boolean,
  succeeded:boolean,
  error:string |null |undefined,
  
}
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch=useDispatch();
  const history=useHistory()

 const loginuser=JSON.parse(localStorage.getItem('user') || "")
    
  const[payment, setPayment]=useState<PaymentActionType>({
    processing:false,
    succeeded:false,
    error:null,
    
  })
  const {processing, succeeded, error}=payment
  const [disable, setDisable]=useState(true)
   

  
  const handleSubmit = async (ev:React.SyntheticEvent )=>{
    ev.preventDefault();

    if(!stripe || !elements){
      return;
    }
    // if(!intent.clientsecret){
    //    setPayment({
    //      processing:true,
    //      succeeded:false,
    //      error:null

    //    })
    // }
    // if(intent.error){
    //   setPayment({
    //     processing:false,
    //     succeeded:false,
    //     error:intent.error

    //   }) 
    // }
    // create the payment intent
    console.log('creating payment intent....')
     
    const response= await api.post('api/create-payment-intent/', {'currency':'usd'})
    const res=response.data
    console.log('payment intent created ..')
    console.log(res)
    console.log('payment intent created')
    // confirm the paymentIntent
    const cardElement=elements.getElement(CardElement)
    if(cardElement){ 
      const payload = await stripe.confirmCardPayment( res.clientSecret, {
      receipt_email: loginuser.email,
      payment_method:{
        card:cardElement
      }
    })

    if(payload.error){
      setPayment({
        processing:false,
        succeeded:false,
        error:payload.error.message

      })
    }
    if(payload.paymentIntent?.status =='succeeded'){
          history.push('/success')
    }
  }


      
  }


  return (
    <>
      {error && (
         <Message color='blue'>{error}</Message>
        
      )}
      {processing && (
        <div className="spinner" id="spinner"></div>
      )}
    <form id='payment-form' className='stripe-form' onSubmit={handleSubmit}>
      <label htmlFor="card-element">Debit Card</label>
      <CardElement id='card-element'/>
       <button id='submit' className='bg-blue-600 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded'>Pay Now</button>
    </form>

    </>
  )
}

export default CheckoutForm
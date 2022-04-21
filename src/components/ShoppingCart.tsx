import React, {useState, useEffect} from 'react'
import Footer from './Footer'
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../store"
import {getCartData} from "../features/cartSlice"
import Loading from './Loading';
import api from '../api'
import {ItemVaType} from "../features/types"
import Message from './Message'
import { Link, useHistory } from 'react-router-dom'

const ShoppingCart = () => {
     const dispatch=useDispatch();
     const history=useHistory();
     const[cartqty, setCartqty]=useState({
         loading:false,
         message:"",
         isSuccess:false
     })

     const usertoken=localStorage.getItem('token')

  
     useEffect(()=>{
        if(usertoken===null){
            history.push('/login')
        }else{
            dispatch(getCartData());
        }
        
     },[dispatch, usertoken])
    
    const cartitem=useSelector((state:RootState) => state.shopping_cart)
    const {cart,loading}=cartitem
     
    const handleRemoveItemFromCart=(item_id:number)=>{
            api.delete(`api/order-item/${item_id}/delete`)
            .then(res =>{
                //refresh the cart item after delete
               dispatch(getCartData());
            }).catch(err =>{
                console.log(err)
            })
    };

    const convertToArray=(ItemVariation:ItemVaType[])=>{
        return Object.keys(ItemVariation).map((key:any)=> {
             return ItemVariation[key].id
        })
   }

    const handleIncreaseCartItem=(prod_id:number, itemvariations:ItemVaType[])=>{
        const v_id=convertToArray(itemvariations)
        const data={prod_id, variation:v_id} 
            
            api.post('api/add-to-cart/', data)
            .then(res =>{
                   //refresh the cart 
                  dispatch(getCartData())
                  setCartqty({
                      loading:false,
                      message:res.data.message,
                      isSuccess:true
                  })
                  console.log(cartqty)

                 
                })
                }

    const handleDecreaseCartItem=(prod_id:number)=>{
           api.post('api/remove-from-cart/', {prod_id})
           .then(res =>{
               dispatch(getCartData())
           }).catch(err =>{
               console.log(err)
           })  
    }

  return (
    <>
    <div className='container h-full min-h-screen mt-24 py-4 bg-gray-300'>
       <div className="grid grid-cols-3 gap-4 mx-4">
            <div className='col-span-2 bg-white'>
            {loading && (
                <Loading/>
            )}
            {cart.order_items.length === 0 ?(
                <Message color='blue'>
                    your cart is empty <Link to='/shop'>Go back</Link>
                </Message>
            ) : (
                <table>
                    <thead>
                    <tr>
                        <th className='cart-head'>Item</th>
                        <th className='cart-head'>Quantity</th>
                        <th className='cart-head'>Sub-Total</th>
                    </tr>
                    </thead>
                    <tbody>
                      {cart.order_items.map(order_item =>{
                          return (
                            <tr className='pb-4' key={order_item.id}>
                            <td>
                                <div className='flex flex-wrap'>
                                    <img src={`http://127.0.0.1:8000${order_item.item.image}`} alt="product image" />
                                    <div className=' space-y-2'>
                                        <h5>{order_item.item.name}</h5>
                                         <div>
                                             {order_item.item_variations?.map(itv =>(
                                                     <small key={itv.id}>{itv.variation.name} : <span>{itv.value}, </span></small>
                                                 ))}
                                         </div>
                                        <small>Price: ${order_item.item.price}</small><br />
                                        <button className='py-1 px-4 mb-6 text-red-400 border hover:bg-red-400 hover:text-white border-red-400 text-sm rounded-sm text-center' onClick={()=> handleRemoveItemFromCart(order_item.id)}>Remove</button>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='flex items-center'>
                                <span className='text-lg mr-3 hover:bg-red-400 hover:text-white cursor-pointer text-center font-medium' onClick={()=>handleDecreaseCartItem(order_item.item.id)}><i className="text-gray-800 hover:text-white h-6 w-6 p-px fas fa-minus"></i></span>
                                <p className='qty text-center'>{order_item.quantity}</p>
                                <span className='text-lg ml-3 hover:bg-red-400 cursor-pointer text-center font-medium' onClick={()=>handleIncreaseCartItem(order_item.item.id, order_item.item_variations)}><i className="text-gray-800 hover:text-white h-6 w-6 p-px fas fa-plus"></i></span>
                                </div>
                            </td>
                            <td className='text-lg font-semibold'>${order_item.final_price}</td>
                        </tr>
                          )
                      })}
                    

                    </tbody>
                </table>
             )}
            </div>
            <div className='bg-white w-full h-48 divide-y'>
                <h3 className='py-4 ml-5 text-xl font-medium'>Cart Summary</h3><hr />
                <div className='w-full text-xl font-semibold py-4 flex justify-around space-x-6'>
                    <p>Total:</p>
                    <span>${cart.total}</span>
                </div>
                <button className='py-3 px-6  w-11/12  mr-2 ml-2 mb-2 text-white hover:bg-red-800  bg-red-400 text-lg rounded-sm'onClick={()=> history.push('/delivery')} >Checkout</button>
            </div>

       </div>
       
    </div>
    <Footer/>
    </>
  )
}

export default ShoppingCart
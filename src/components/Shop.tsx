import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '../store'
import Ads from "../static/imgs/soon.png"
import {Rating} from "../pages/Rating"
import Footer from './Footer'
import {getProductsData} from "../features/ProductListSlice"
import Loading from './Loading'
interface Props {
    
}

const Shop = (props: Props) => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProductsData());
    },[dispatch])
    
    const all_products=useSelector((state:RootState)=> state.products)
    const {products, isLoading}=all_products
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
                    Shop
                </p>
           </div>
           <div className="container grid grid-cols-4 gap-6 pt-4 px-4 pb-16 items-start">
               <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
                   <div className="divide-y  divide-gray-200 space-y-5">
                       <div>
                           <h3 className="text-xl text-gray-500 mb-3 uppercase font-medium">categories</h3>
                           <div className="space-y-2">
                               <div className="flex items-center">
                                   <span>1 .</span>
                                   <p className="text-gray-600 ml-3 cursor-pointer">
                                       Sneakers
                                   </p>
                                   <div className="ml-auto text-gray-600 text-sm">(214)</div>
                               </div>
                               <div className="flex items-center">
                                   <span>2 .</span>
                                   <p className="text-gray-600 ml-3 cursor-pointer">
                                       Corperate Shoes
                                   </p>
                                   <div className="ml-auto text-gray-600 text-sm">(214)</div>
                               </div>
                               <div className="flex items-center">
                                   <span>3 .</span>
                                   <p className="text-gray-600 ml-3 cursor-pointer">
                                       Pam slippers
                                   </p>
                                   <div className="ml-auto text-gray-600 text-sm">(84)</div>
                               </div>
                               <div className="flex items-center">
                                   <span>4.</span>
                                   <p className="text-gray-600 ml-3 cursor-pointer">
                                       Hoodies
                                   </p>
                                   <div className="ml-auto text-gray-600 text-sm">(68)</div>
                               </div>
                               <div className="flex items-center">
                                   <span>5 .</span>
                                   <p className="text-gray-600 ml-3 cursor-pointer">
                                       boots
                                   </p>
                                   <div className="ml-auto text-gray-600 text-sm">(43)</div>
                               </div>
                           </div>
                       </div>

                       <div className='pt-4'>
                           <h3 className="text-xl text-gray-500 mb-3 uppercase font-medium">Brands</h3>
                           <div className="space-y-2">
                               <div className="flex items-center">
                                   <span>1 .</span>
                                   <p className="text-gray-600 ml-3 cursor-pointer">
                                       Nike
                                   </p>
                                   <div className="ml-auto text-gray-600 text-sm">(43)</div>
                               </div>
                               <div className="flex items-center">
                                   <span>2 .</span>
                                   <p className="text-gray-600 ml-3 cursor-pointer">
                                       Gucci
                                   </p>
                                   <div className="ml-auto text-gray-600 text-sm">(14)</div>
                               </div>
                               <div className="flex items-center">
                                   <span>3 .</span>
                                   <p className="text-gray-600 ml-3 cursor-pointer">
                                       Dior
                                   </p>
                                   <div className="ml-auto text-gray-600 text-sm">(84)</div>
                               </div>
                               <div className="flex items-center">
                                   <span>4.</span>
                                   <p className="text-gray-600 ml-3 cursor-pointer">
                                       Adidas
                                   </p>
                                   <div className="ml-auto text-gray-600 text-sm">(68)</div>
                               </div>
                               <div className="flex items-center">
                                   <span>5 .</span>
                                   <p className="text-gray-600 ml-3 cursor-pointer">
                                       Hermes
                                   </p>
                                   <div className="ml-auto text-gray-600 text-sm">(43)</div>
                               </div>
                               <div className="flex items-center">
                                   <span>6.</span>
                                   <p className="text-gray-600 ml-3 cursor-pointer">
                                       Fila
                                   </p>
                                   <div className="ml-auto text-gray-600 text-sm">(43)</div>
                               </div>
                               <div className="flex items-center">
                                   <span>7 .</span>
                                   <p className="text-gray-600 ml-3 cursor-pointer">
                                       Louis Vuitton
                                   </p>
                                   <div className="ml-auto text-gray-600 text-sm">(43)</div>
                               </div>
                               <div className="flex items-center">
                                   <span>8 .</span>
                                   <p className="text-gray-600 ml-3 cursor-pointer">
                                       Fendi
                                   </p>
                                   <div className="ml-auto text-gray-600 text-sm">(32)</div>
                               </div>
                           </div>
                       </div>
                       <div className="pt-4">
                            <img src={Ads} alt="ads-banner" className='p-2' />
                       </div>
                   </div>
               </div>

               <div className="col-span-3">
               {isLoading ? <Loading/> :
                 <div className="grid grid-cols-3 my-4 gap-6">  
                    {products.map(product =>{
                        return (
                            <a href={`product/${product.id}`} key={product.id}>
                            <div className="bg-white shadow rounded hover:bg-gray-100 overflow-hidden">
                                <div className="relative">
                                    <img src={product.image}  className=' w-full h-40' alt="product-img" />
                                </div>
                                <div className="pt-4 pb-3 px-4">
                                        <h4 className='uppercase font-medium text-xl mb-2 '>{product.name}</h4>
                                        <div className="flex items-baseline justify-end mb-1">
                                            <p className="text-xl text-gray-800 font-semibold">${product.price}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f5ce42'}/>
                                            
                                        </div>
                                </div>
                            </div>
                            </a>
                        )
                    })}
                
                 </div>
              }
               </div>
           </div>
           <Footer/>
        </>
    )
}

export default Shop

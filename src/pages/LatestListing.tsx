import React from 'react'
import { RootState } from '../store'
import { useSelector } from 'react-redux'
import { Rating } from './Rating'

export const LatestListing:React.FC = () => {
    const latest_products=useSelector((state:RootState)=>state.latest_products.products)
    return (
        <>
            <div className="container pb-16 px-6">
            <h2 className='text-2xl font-medium text-gray-800 uppercase pl-8 mb-6'>Latest Products</h2>
            <div className="grid grid-cols-4 gap-6">
                {latest_products.map(product =>{
                    return (
                        <a href={`product/${product.id}`}  key={product.id}>
                        <div className="bg-white shadow rounded overflow-hidden">
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
            </div>
        </>
    )
}

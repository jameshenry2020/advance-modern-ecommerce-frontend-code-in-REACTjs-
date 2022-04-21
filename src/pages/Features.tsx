import React from 'react'
import shipping from "../static/imgs/shipping.png"
import Money from "../static/imgs/money.png"
import Support from "../static/imgs/support.png"
export const Features = () => {
    return (
        <div className='container py-16'>
            <div className="w-10/12 grid sm:grid-cols-3 grid-cols-1 gap-6 mx-auto justify-center">
                {/* single box */}
                <div className="border border-red-500 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <img src={shipping} alt="delivery icon"  className="w-12 h-12 object-contain"/>
                        <div>
                            <h4 className="font-medium capitalize text-lg">fast delivery</h4>
                            <p className='text-grey-500 text-sm'> get  your orders within two days</p>
                        </div>
                </div>
                <div className="border border-red-500 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <img src={Money} alt="delivery icon"  className="w-12 h-12 object-contain"/>
                        <div>
                            <h4 className="font-medium capitalize text-lg">Money Return</h4>
                            <p className='text-grey-500 text-sm'>30 Days money return</p>
                        </div>
                </div>
                <div className="border border-red-500 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <img src={Support} alt="delivery icon"  className="w-12 h-12 object-contain"/>
                        <div>
                            <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
                            <p className='text-grey-500 text-sm'> Customer support</p>
                        </div>
                </div>
            </div>
            
        </div>
    )
}

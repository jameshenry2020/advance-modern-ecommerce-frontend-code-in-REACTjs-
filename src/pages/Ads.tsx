import React from 'react'
import AdsBanner from "../static/imgs/ads.png"
const Ads = () => {
    return (
        <div className='container pb-6 flex justify-center'>
            <img src={AdsBanner} className='w-10/12 h-80 rounded' alt="banner" />
        </div>
    )
}

export default Ads

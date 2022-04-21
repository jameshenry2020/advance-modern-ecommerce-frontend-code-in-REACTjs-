import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Ads from '../pages/Ads'
import  Banners from "../pages/Banners"
import {Features} from "../pages/Features"
import {LatestListing} from "../pages/LatestListing"
import { PopularListing } from '../pages/PopularListing'
import { getLatestProducts } from '../features/latestProductListSlice'
import { getTopProductsList } from '../features/topProductListSlice'
import  Footer from "./Footer";
interface HomeProps {
    
}

export const Home = (props:HomeProps) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTopProductsList());
        dispatch(getLatestProducts());
    },[dispatch])
    return (
        <>
        <div className='homebanner'>
            <Banners/>
        </div>
            <Features/>
            <LatestListing/>
            <Ads/>
            <PopularListing/>
            <div className="footer">
                <Footer/>
            </div>


            
        
        </>
    )
}

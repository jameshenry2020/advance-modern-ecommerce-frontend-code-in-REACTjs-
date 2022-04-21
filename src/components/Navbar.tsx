import React, {useState, useEffect} from 'react'
import "../static/css/navbar.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from "../features/authSlice"
import { getCartData } from '../features/cartSlice';
import { RootState } from '../store';
export const Navbar = () => {
  const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(getCartData())
    },[dispatch])



    const globalState=useSelector((state:RootState)=>state.shopping_cart)
    const {loading, cart}=globalState
    const [active, setActive] = useState(false)
    const [showmenu, setShowmenu] = useState(false)
   
    const usertoken=localStorage.getItem('token')
      
    const handleLogout =()=>{
          dispatch(logout())
    }
    return (
        <div className="navber-container w-full h-auto bg-white text-gray-600">          
            
            <Link to="/" className="logo text-2xl font-black text-black cursor-pointer uppercase">FashionLand</Link>
            <div className={showmenu ? "nav active":"nav"}>
                <Link to="/men" className='menu-link text-sm text-gray-300 hover:text-gray-500'>Men's Shoes</Link>
                <Link to="/ladies" className='menu-link text-sm text-gray-300 hover:text-gray-500'>hoodies</Link>
                <Link to="/shop" className='menu-link text-gray-300 hover:text-gray-500'>Latest Products</Link>
                 {usertoken !==null ?  
                   <Link to="/profile" className='menu-link text-gray-300 hover:text-gray-500'>
                     profile
                  </Link>
                :   
                   <Link to="/login" className='menu-link text-gray-300 hover:text-gray-500'>Account</Link>
                }
               
            </div>
            <div className="icons flex items-center justify-between space-x-4">
                {/* search icon & cart icon */}
                <div className="menu1" onClick={()=> {
                    setShowmenu(!showmenu);
                    setActive(false);}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 icon mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                 

                   <div onClick={()=>{
                       setActive(!active);
                       setShowmenu(false)
                                 }}>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 icon mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                  <Link to="/cart" className='flex items-center'>
                     { usertoken===null ? 
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  icon mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        :
                         <React.Fragment>
                        <div className='bg-red-600 text-xs text-center  h-6 w-6 mx-px font-medium rounded-lg'>
                          {loading ? 'Loading...': 
                            <span className='text-sm font-medium text-white'>{`${cart !==null ? cart.order_items.length : 0}`}</span>
                          }
                          
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  icon mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        </React.Fragment>
                        }  
                  </Link>
                  </div>
                  <div>
                  {usertoken !==null && 
                    <button className='px-6 py-2 text-xl bg-blue-500 text-white rounded-full border' onClick={handleLogout}>Logout</button>
                  } 
                  </div>
                  <form className={active ? "search-form active" : "search-form"}>
                      <input type="search" name="search" placeholder="search item here" id="search-item" />
                      <label htmlFor="search-box">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </label>
                  </form>
            </div>    
        </div>
    )
}

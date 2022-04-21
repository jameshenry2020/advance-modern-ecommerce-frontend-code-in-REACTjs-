import React from 'react'
import {Link} from "react-router-dom"

interface IProp{
    succeeded:boolean
}


const Success = () => {
  return (
    <div className='container mt-24 py-8 text-center'>
         <p className={ "result-message"}>
           Order completed. thanks for completing your purchase!
          </p>
          <p className={ "result-message"}>the receipt of your transaction have be sent your email</p>
          <p className={ "result-message mb-4"}>track your order shipping status from your dashboard</p>
          <Link to={'/profile'} className='bg-green-600 hover:bg-green-700 text-white font-bold mt-4 py-2 px-4 rounded'>Dashboard</Link>
    </div>
  )
}

export default Success
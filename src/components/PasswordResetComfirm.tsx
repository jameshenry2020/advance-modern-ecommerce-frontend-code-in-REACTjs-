import React,{useState} from 'react'
import {useHistory, useParams} from "react-router-dom"

interface UrlParam{
    uidb64:string,
    token:string,
}


const ResetPasswordComfirm = () => {
     const history=useHistory()
     const {uidb64, token}:UrlParam =useParams()
    const [passwords, setPasswords]=useState({
        password1:"",
        password2:""
    })

    const {password1, password2}=passwords
     const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
              setPasswords({
                ...passwords,
                [e.target.name]:e.target.value
              })          
     }

     const handleSubmit=()=>{
         const data ={uidb64, token, password1, password2}
         console.log(data)
        
        
     }

  return (
    <div className='login-container min-h-screen  flex flex-col   max-w-full'>
        <div className="max-w-lg w-full mx-auto">
                <div className="text-center text-3xl font-bold mt-2 text-gray-500">Enter your New password</div>
        </div>
        <div className="max-w-xl w-full mx-auto mt-4 p-8 border bg-white border-gray-300">
                <form action="" onSubmit={handleSubmit} className='space-y-6'>
                     <div>
                        <label htmlFor="Password" className='text-sm font-bold text-gray-600 block'>Password</label>
                        <input type="password" name='password' value={password1} onChange={handleChange} placeholder='password' className="w-full border p-2 rounded mt-1 border-gray-300"/> 
            
                    </div>
                    <div>
                        <label htmlFor="Confirm Password" className='text-sm font-bold text-gray-600 block'>Confirm Password</label>
                        <input type="password" name='confirm_password' value={password2} onChange={handleChange} placeholder='confirm password' className="w-full border p-2 rounded mt-1 border-gray-300"/> 
    
                    </div>
                    
                    <div>
                        <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">Reset Password</button>
                    </div>
                     
                </form>
            </div>
    </div>
  )
}

export default ResetPasswordComfirm
import React from 'react'
import logo from "../static/imgs/logo.png"
import methods from "../static/imgs/pa.png"
const Footer = () => {
    return (
        <>
          <footer className='bg-white pt-16 pb-12 border-t border-gray-400'>
             <div className="container grid grid-cols-3">
                 <div className="col-span-1 space-y-8 px-6">
                     <img src={logo} className='w-40' alt="sample logo" />
                     <p className="text-gray-500">Lorem ipsum dolor sit adipisicing elit. Quidem, esse.</p>
                      <div className="flex space-x-6">
                          <a href="" className="text-gray-400 hover:text-gray-500">
                                <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="" className="text-gray-400 hover:text-gray-500">
                                <i className="fab fa-twitter"></i>
                          </a>
                          <a href="" className="text-gray-400 hover:text-gray-500">
                                <i className="fab fa-instagram"></i>
                          </a>
                          <a href="" className="text-gray-400 hover:text-gray-500">
                                <i className="fab fa-linkedin-in"></i>
                          </a>
                      </div>
                 </div>
                 <div className="col-span-2 grid grid-cols-2 gap-8">
                     <div className="grid grid-cols-2 gap-8">
                         <div>
                             <h3 className="text-sm text-gray-400 font-semibold uppercase traking-wider">
                                    Brands
                             </h3>
                             <div className="mt-4 space-y-4">
                                 <a href="" className="text-base text-gray-500 hover:text-gray-800 block">Gucci</a>
                                 <a href="" className="text-base text-gray-500 hover:text-gray-800 block">Nike</a>
                                 <a href="" className="text-base text-gray-500 hover:text-gray-800 block">Dior</a>
                                 <a href="" className="text-base text-gray-500 hover:text-gray-800 block">Hermes</a>
                             </div>
                         </div>

                         <div>
                             <h3 className="text-sm text-gray-400 font-semibold uppercase traking-wider">
                                    Support
                             </h3>
                             <div className="mt-4 space-y-4">
                                 <a href="#" className="text-base text-gray-500 hover:text-gray-800 block">Marketing</a>
                                 <a href="#" className="text-base text-gray-500 hover:text-gray-800 block">Report a product</a>
                                 <a href="#" className="text-base text-gray-500 hover:text-gray-800 block">help center</a>
                                 <a href="#" className="text-base text-gray-500 hover:text-gray-800 block">pricing</a>
                             </div>
                         </div>
                     </div>
                     <div className="grid grid-cols-2 gap-8">
                         <div>
                             <h3 className="text-sm text-gray-400 font-semibold uppercase traking-wider">
                                    international
                             </h3>
                             <div className="mt-4 space-y-4">
                                 <a href="" className="text-base text-gray-500 hover:text-gray-800 block">Canada</a>
                                 <a href="" className="text-base text-gray-500 hover:text-gray-800 block">Nigeria</a>
                                 <a href="" className="text-base text-gray-500 hover:text-gray-800 block">South Africa</a>
                                 <a href="" className="text-base text-gray-500 hover:text-gray-800 block">USA</a>
                             </div>
                         </div>

                         <div>
                             <h3 className="text-sm text-gray-400 font-semibold uppercase traking-wider">
                                    About FashionLand
                             </h3>
                             <div className="mt-4 space-y-4">
                                 <a href="#" className="text-base text-gray-500 hover:text-gray-800 block">careers</a>
                                 <a href="#" className="text-base text-gray-500 hover:text-gray-800 block">working Teams</a>
                                 <a href="#" className="text-base text-gray-500 hover:text-gray-800 block">Terms & Conditions</a>
                                 <a href="#" className="text-base text-gray-500 hover:text-gray-800 block">pricing</a>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>

          </footer> 
          <div className="bg-gray-800 py-4">
              <div className="container flex items-center px-8 justify-between">
                <p className="text-white">
                   &copy; FashionLand - All Rights Reserved
                </p>
                <img src={methods} className='h-8' alt="" />
              </div>
          </div> 
        </>
    )
}

export default Footer

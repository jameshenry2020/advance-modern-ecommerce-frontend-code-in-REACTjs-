import React, {useState, useEffect, Fragment} from 'react'
import { useParams, useHistory } from 'react-router';
import { Rating } from '../pages/Rating';
import Thumbnail from './Thumbnail';
import { RootState } from '../store';
import { useDispatch,useSelector} from 'react-redux';
import { getProductDetail } from '../features/productDetailSlice';
import api from "../api"
import Message from './Message';

type variationType={
    
}
type CartType={
    loading:boolean,
    message:string,
    isSuccess:boolean
}
const Detail = () => {
    const dispatch=useDispatch();
    const history=useHistory();
    const[index, setIndex]=useState(0)
    const [qty, setQty]=useState<number|string|undefined>(1)
    const[variation, setVariation]=useState<variationType>({
       
    })
    const[additem, setAdditem]=useState<CartType>({
        loading:false,
        message:"",
        isSuccess:false
    })
        const {id }:any =useParams();
        const item=useSelector((state:RootState)=>state.single_product.product);     
        const imgarr=item?.thumbnails[index]      
    
   const usertoken=localStorage.getItem('token')
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setVariation({
            ...variation,
        [e.target.name]:Number(e.target.value)
        })
    }
     
    const convertToArray=(data:any)=>{
         return Object.keys(data).map((key)=> {
              return data[key]
         })
    }
   
    const AddToCart=()=>{
        const v_id=convertToArray(variation)
        const data={prod_id:item.id, variation:v_id, qty:qty} 
        if(usertoken===null){
             history.push('/login')
        }else{ 
            
            additem.loading=true
            api.post('api/add-to-cart/', data)
            .then(res =>{
                setAdditem({
                    loading:false,
                    message:res.data.message,
                    isSuccess:true     
                })
                
            
        })
        }
       
        
    }
        
    useEffect(()=>{
        dispatch(getProductDetail(id));
        setIndex(0)
    },[dispatch, id])
    
    let arr:number[]= [...Array(item.countInstock).keys()]
       
    return (
        <Fragment>    
            <div>
               <div className="container flex items-center px-4 mt-16 py-5 gap-5">
               <a href="#" className="text-red-500 text-base">
                <i className="fas fa-home"></i>
                </a>
                <span className="text-sm text-gray-400">
                <i className="fas fa-chevron-right"></i>
                </span>
                <p className="text-gray-600 font-medium">
                    Product Details
                </p>
               </div>
                  { additem.isSuccess && <Message color={'green'}>{additem.message}</Message> }
               <div className="container w-full bg-white shadow-lg rounded-lg grid grid-cols-2 px-8 py-8 m-4 gap-6">
               <div>
                   <img src={`http://127.0.0.1:8000${imgarr?.img}`} alt="product image" className='w-full'/>
                   <Thumbnail images={item.thumbnails} changeIndex={setIndex} index={index}/>
               </div>
              {/* product content   */}
                <div>
                    <h3 className='text-3xl font-medium uppercase mb-2'>{item?.name}</h3>
                  <Rating value={item?.rating} text={`${item?.numReviews} reviews`} color={'#f5ce42'} />  
                  <div>
                     <p className='font-semibold mt-2 text-gray-800 mb-2'><span> Availability:</span> 
                     <span className='text-green-600'> {item?.countInstock > 0 ? "In stock" : "Out of stock"} </span>
                     </p>
                     <p className='space-x-2'>
                            <span className="text-gray-800 text-lg font-semibold">Brand: </span>
                            <span className="text-gray-600">{item?.brand}</span>
                     </p>
                     <p className='space-x-2'>
                            <span className="text-gray-800 text-lg font-semibold">Category: </span>
                            <span className="text-gray-600">{item?.category}</span>
                     </p>
                     <div className="flex items-baseline mb-1 space-x-2 mt-2">
                         <p className="text-2xl font-semibold text-red-500"> ${item?.price}</p>
                     </div>
                            <span className="text-gray-800 text-lg font-semibold">Description: </span>
                            <p className="mt-2 text-gray-600">{item?.description}</p>
                     
                     <div className='pt-4'>
                      <h3 className='text-lg font-semibold uppercase mb-3 text-green-800'>Variations</h3>
                          <div className="flex flex-col  gap-2">
                        
                             {item.variations && (
                                 item.variations.map(v =>{
                                     const name = v.name.toLowerCase()
                                     return (
                                        <div className=" flex flex-col  gap-2" key={v.id}>
                                        <h3 className='text-lg font-medium uppercase text-gray-800'>{name}</h3>
                                        <div className='size-selector space-x-4 flex items-center gap-2'>
                                         {v.item_variations?.map(iv=>{
                                             return (
                                                 <div key={iv.id} >
                                                
                                                <input type="radio" name={name} value={iv.id} onChange={handleChange} className='m-0 p-0'/>
                                                <label htmlFor="size" className='text-sm border border-gray-200 h-6 w-6 rounded-sm flex items-center justify-center cursor-pointer shadow-sm'>
                                                     {iv.value}   
                                                </label>
                                                </div>
                                             )
                                         })} 
                                         </div>   
                               
                                       </div>
                                     )
                                 })
                             )}                      
                                {/* end single size select */}
                          </div>
                      </div>
                      <div className="pt-4">
                            {item.countInstock > 0 &&(
                                <div className="grid grid-cols-2 gap-8">
                                    <p className='text-xl text-gray-800 font-bold'>Qty: </p>
                                    <div className='flex justify-center'>
                                        <div className='mb-3 xl:w-44'>
                                      <select className="form-select  block w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding bg-no-repeat
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" value={qty} onChange={(e)=>setQty(e.target.value)}>
                                            {
                                              arr.map((x)=>(
                                                  <option key={x+1} value={x+1}>{x+1}</option>
                                              )) 
                                            }
                                            
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            )}
                      </div>
                      <button className='bg-red-500 text-white my-4 hover:bg-red-800 w-1/2 py-4 px-6 rounded-sm' disabled={item?.countInstock==0} onClick={AddToCart}>Add To Cart</button>
                      
                    </div>
                </div>
               </div>
           </div> 
        </Fragment>
    )
}

export default Detail

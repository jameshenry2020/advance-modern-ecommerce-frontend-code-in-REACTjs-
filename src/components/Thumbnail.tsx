import React from 'react'

interface Image{
  id:number,
  img:string
}


interface Props{
    images:Image[] | undefined,
    changeIndex:React.Dispatch<React.SetStateAction<number>>,
    index:number
}


const Thumbnail = ({images, changeIndex, index}:Props) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-3">
            {images?.map((image, i) =>(
                <img src={`http://127.0.0.1:8000${image.img}`}
                  key={image.id}
                  onClick={()=>changeIndex(i)}
                  className={index===i ? 'w-full cursor-pointer border border-red-500 t_active':'w-full cursor-pointer border'}/>
            ))}
   </div>
  )
}

export default Thumbnail
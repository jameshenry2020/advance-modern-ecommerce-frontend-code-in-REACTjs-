import React from 'react'

interface RProps {
    value:number,
    text:string,
    color:string
}

export const Rating = (props: RProps) => {
    const {value, text, color}=props
    return (
        <div className='flex gap-1 text-sm '>
            <span>
                <i style={{color}} className={
                    value >=1 ? 'fas fa-star': value >=0.5 ? 'fas fa-star-half-alt' :'far fa-star'
                }>

                </i>
            </span>
            <span>
                <i style={{color}} className={
                    value >=2 ? 'fas fa-star': value >=1.5 ? 'fas fa-star-half-alt' :'far fa-star'
                }>

                </i>
            </span>
            <span>
                <i style={{color}} className={
                    value >=3 ? 'fas fa-star': value >=2.5 ? 'fas fa-star-half-alt' :'far fa-star'
                }>

                </i>
            </span>
            <span>
                <i style={{color}} className={
                    value >=4 ? 'fas fa-star': value >=3.5 ? 'fas fa-star-half-alt' :'far fa-star'
                }>

                </i>
            </span>
            <span>
                <i style={{color}} className={
                    value >=5 ? 'fas fa-star': value >=4.5 ? 'fas fa-star-half-alt' :'far fa-star'
                }>

                </i>
            </span>

            <span className='text-sm text-gray-500 ml-3'>{text && text}</span>
        </div>
    )
}

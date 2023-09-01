import React from 'react'
import Image from 'next/image'

const PlaceCard = ({ image, title1,title12 }) => {
    return (
        <div className=' px-[30px] py-[30px] bg-[#F3F8F4] rounded-[8px]'>
            <Image className='mb-5 h-[50px] w-[50px]' src={image} alt='image' />
            <h4>{title1} </h4>
            <h4>{title12} </h4>
        </div>
    )
}

export default PlaceCard
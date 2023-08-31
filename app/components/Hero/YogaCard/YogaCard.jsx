
import React from 'react'
import Image from 'next/image'


const YogaCard = ({ image, title, speed }) => {

    return (
        <div>
            <Image className='h-[60px] w-[60px] mb-5' src={image} alt='image' />
            <h6 className='mb-[5px]'>{title}</h6>
            <small>{speed}</small>
        </div>
    )
}

export default YogaCard
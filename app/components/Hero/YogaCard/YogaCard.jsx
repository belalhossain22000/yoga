"use client"
import React from 'react'
import Image from 'next/image'
import Reveals from '@/app/animations/Reveals/Reveals'


const YogaCard = ({ image, title, speed }) => {

    return (
        <div className=''>
            <Image className='h-[60px] w-[60px] mb-5' src={image} alt='image' />
            <Reveals>
            <h6 className='mb-[5px]'>{title}</h6>
              </Reveals>
              <Reveals>
            <small>{speed}</small>
              </Reveals>
        </div>
    )
}

export default YogaCard
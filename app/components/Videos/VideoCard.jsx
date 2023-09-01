"use client"
import React from 'react'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa';

const VideoCard = ({ image }) => {
    return (
        <div className='relative '>
            <Image className='object-cover' src={image} alt='video cover image' />
            <div className='absolute left-[40%] top-[40%] bg-white flex items-center justify-center text-black h-[60px] w-[60px] rounded-full'>
                <FaPlay />
            </div>
        </div>
    )
}

export default VideoCard
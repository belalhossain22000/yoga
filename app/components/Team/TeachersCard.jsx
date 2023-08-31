"use client"
import React from 'react';
import Image from 'next/image';
import { FaFacebook,FaInstagramSquare,FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const TeachersCard = ({ person, bg, title, name }) => {
    return (
        <div>
            <div className='relative w-[370px] bg-green- flex items-center justify-center'>

                <Image c src={person} alt='image' />
                <Image className='absolute bottom-0 -z-10 left-auto right-auto' src={bg} alt='image' />
            </div>
            <div className='w-[370px] h-[185px] bg-[#F3F8F4] rounded-b-full flex flex-col items-center justify-center'>
                <h4>{title}</h4>
                <small>{title}</small>
                <div className='flex items-center gap-[10px]'>
                    <Link href={"/"}><FaFacebook className='transition-all duration-700 h-9 w-9 rounded-full p-[9px] bg-white hover:bg-[#006838] hover:text-white text-[#006838]'/></Link>
                    <Link href={"/"}><FaInstagramSquare className='transition-all duration-700 h-9 w-9 rounded-full p-[9px] bg-white hover:bg-[#006838] hover:text-white text-[#006838]'/></Link>
                    <Link href={"/"}><FaYoutube className='transition-all duration-700 h-9 w-9 rounded-full p-[9px] bg-white hover:bg-[#006838] hover:text-white text-[#006838]'/></Link>
                </div>
            </div>
        </div>
    )
}

export default TeachersCard
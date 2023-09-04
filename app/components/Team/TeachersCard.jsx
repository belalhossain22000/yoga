"use client"

import React from 'react';
import Image from 'next/image';
import { FaFacebook,FaInstagramSquare,FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import Reveals from '@/app/animations/Reveals/Reveals';

const TeachersCard = ({ person, bg, title, name }) => {
    return (
        <div>
            <div className='relative w-full bg-green- flex items-center justify-center'>

                <Image className='w-auto h-auto' src={person} alt='image' />
                <Image className='absolute bottom-0 -z-10 left-auto right-auto h-[80%] w-[80%] ' src={bg} alt='image' />
            </div>
            <div className='w-full pt-[26px] pb-[38px] bg-[#F3F8F4] rounded-b-full flex flex-col items-center justify-center'>
            <Reveals>
                <h4 className='xlg:mb-[5px]'>{title}</h4>
              </Reveals>
              <Reveals>
                <small className='xlg:mb-5'>{title}</small>
              </Reveals>
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
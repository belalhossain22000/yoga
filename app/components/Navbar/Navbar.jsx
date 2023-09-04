"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import bar from './image/bar.png'
import profile from './image/Profile.png';
import logo from './image/logo.svg';
import Container from '@/app/utils/Container/Container'
import Link from 'next/link';
import { AiFillCloseCircle } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    // Update the body's style when isOpen changes
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup the effect when the component unmounts
    return () => {
      document.body.style.overflow = ''; 
    };
  }, [isOpen]);
  return (
    <nav className='relative'>
      <Container maxWidth={"max-w-[1440px]"}>

        <div className='bg-re-500  flex items-center justify-between'>
          {/* bar icon */}
          <div onClick={() => setIsOpen(!isOpen)} className='md:h-[100px] h-[60px] md:w-[100px] w-[60px] bg-[#27392A] flex items-center justify-center cursor-pointer'>
            <Image src={bar} alt='bar icon' className='h-[20px] w-[20px] md:h-[25px] md:w-[35px]' />
          </div>
          {/* logo */}
          <Link href={"/"}>
            <Image className='w-[54px] h-[50px]' src={logo} alt='logo' />
          </Link>
          {/* profile icon */}
          <div className='md:h-[100px] h-[60px] md:w-[100px] w-[60px] bg-[#27392A] flex items-center justify-center cursor-pointer'>
            <Image src={profile} alt='bar icon' className='h-[20px] w-[20px] md:h-auto md:w-[40px]' />
          </div>
        </div>
      </Container>
      {/* navigation for drawer */}
      <div className={`h-[100vh] w-[70%] md:w-[50%] xlg:w-[30%] bg-[#27392A] absolute top-0 transition-all duration-700 ease-in-out text-white py-10 pl-5 md:pl-10 ${isOpen ? "left-0" : "left-[-1000px]"} z-50 `}>


        <div className='flex items-center flex-row justify-between'>
          {/* logo */}
          <Link href={"/"}>
            <Image className='w-[54px] h-[50px]' src={logo} alt='logo' />
          </Link>
          <AiFillCloseCircle className='font-bold text-[40px] cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
        </div>

        <ul className='flex flex-col items-start space-y-5 mt-10'>
          <li><Link className='text-white font-bold text-lg' href={"/"}>Store</Link></li>
          <li><Link className='text-white font-bold text-lg' href={"/"}>Membership</Link></li>
          <li><Link className='text-white font-bold text-lg' href={"/"}>Schedules</Link></li>
          <li><Link className='text-white font-bold text-lg' href={"/"}>Teacher Training</Link></li>
          <li><Link className='text-white font-bold text-lg' href={"/"}>Resources</Link></li>
          <li><Link className='text-white font-bold text-lg' href={"/"}>Contacts</Link></li>
          <li><Link className='text-white font-bold text-lg' href={"/"}>About</Link></li>
        </ul>


      </div>
    </nav>
  )
}

export default Navbar
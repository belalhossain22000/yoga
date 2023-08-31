import Container from '@/app/utils/Container/Container'
import React from 'react'
import Image from 'next/image'
import logo from './image/logo.png'
import Button from '@/app/utils/Button/Button'
import Link from 'next/link';
import { FaFacebook, FaInstagramSquare, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      <section className='bg-[#F5F5F5] pt-[80px] xlg:mt-[100px] mt-10'>
        <Container maxWidth={"max-w-[1168px]"}>
          <div className='flex flex-col items-center'>

            <Image src={logo} alt='logo' className='h-[50px] w-[54px] mb-5'/>
            <h5 className='mb-4'>Invest in your health.</h5>
            <p className='mb-10'>450 NW Couch Street, Portland, Oregon 97209</p>
            {/* input */}
            <div className='w-[570px] h-[60px] relative bg-[#FFF] rounded-[32px]'>
              <input type="email" placeholder='Email Address' className='w-full h-full bg-[#FFF] rounded-[32px] pl-[30px] py-[19px]' />
              <div className='w-fit absolute right-[3px] top-[3px] bottom-auto'>

                <Button px={"px-[35px]"} py={"py-[13px]"}>Subscribe</Button>
              </div>
            </div>

          </div>
        </Container>
        <Container maxWidth={"max-w-[1168px]"}>
        {/* menu section */}
        <div className='flex items-center justify-between mt-[60px]'>
          <div className='flex items-center gap-[30px]'>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Schedules</Link>
            <Link href={"/"}>Membership</Link>
            <Link href={"/"}>Teacher Training</Link>
            <Link href={"/"}>Store</Link>
            <Link href={"/"}>Resources</Link>
            <Link href={"/"}>Contacts</Link>
          </div>
          {/* social section */}
          <div className='flex items-center gap-[10px]'>
            <Link href={"/"}><FaFacebook className='transition-all duration-700 h-9 w-9 rounded-full p-[9px] bg-white hover:bg-[#006838] hover:text-white text-[#006838]' /></Link>
            <Link href={"/"}><FaInstagramSquare className='transition-all duration-700 h-9 w-9 rounded-full p-[9px] bg-white hover:bg-[#006838] hover:text-white text-[#006838]' /></Link>
            <Link href={"/"}><FaYoutube className='transition-all duration-700 h-9 w-9 rounded-full p-[9px] bg-white hover:bg-[#006838] hover:text-white text-[#006838]' /></Link>
          </div>
        </div>
        </Container>
        <div className='h-[1px] max-w-[1440px] w-full mx-auto bg-black mt-[34px]'></div>
        <div className='flex items-center justify-center  py-4'>

          <small className='text-center'>© 2023 oyolloo. All rights reserved</small>
        </div>
      </section>
    </>
  )
}

export default Footer
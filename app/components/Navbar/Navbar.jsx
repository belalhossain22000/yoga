import React from 'react'
import Image from 'next/image'
import bar from './image/bar.png'
import profile from './image/Profile.png';
import logo from './image/logo.svg';
import Container from '@/app/utils/Container/Container'

const Navbar = () => {
  return (
    <Container maxWidth={"max-w-[1440px]"}>

      <nav className='bg-re-500  flex items-center justify-between'>
        {/* bar icon */}
        <div className='md:h-[100px] h-[60px] md:w-[100px] w-[60px] bg-[#27392A] flex items-center justify-center'>
          <Image src={bar} alt='bar icon' className=' md:h-[25px] md:w-[35px]' />
        </div>
        {/* logo */}
        <Image className='w-[54px] h-[50px]' src={logo} alt='logo'/>
        {/* profile icon */}
        <div className='md:h-[100px] h-[60px] md:w-[100px] w-[60px] bg-[#27392A] flex items-center justify-center'>
          <Image src={profile} alt='bar icon' className='md:h-[30x] md:w-[36px]' />
        </div>
      </nav>
    </Container>
  )
}

export default Navbar
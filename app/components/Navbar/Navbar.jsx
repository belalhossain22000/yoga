import React from 'react'
import Image from 'next/image'
import bar from './image/bar.png'
import profile from './image/Profile.png'

const Navbar = () => {
  return (
    <nav className='bg-re-500 container flex items-center justify-between'>
      {/* bar icon */}
      <div className='h-[100px] w-[100px] bg-[#27392A] flex items-center justify-center'>
        <Image src={bar} alt='bar icon' className='h-[25px] w-[35px]' />
      </div>
      {/* profile icon */}
      <div className='h-[100px] w-[100px] bg-[#27392A] flex items-center justify-center'>
        <Image src={profile} alt='bar icon' className='h-[30x] w-[36px]' />
      </div>
    </nav>
  )
}

export default Navbar
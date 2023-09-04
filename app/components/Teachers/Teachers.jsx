"use client"
import Container from '@/app/utils/Container/Container'
import React from 'react';
import Image from 'next/image';
import profile from './image/profile.svg';
import halfCircle from './image/Ellipse 39.png';
import person from './image/person.png';
import Reveals from '@/app/animations/Reveals/Reveals';

const Teachers = () => {
  return (
    <Container maxWidth={"max-w-[1168px]"}>

      <section className='flex xm:flex-row flex-col-reverse items-center justify-between gap-5 mt-10 xlg:mt-[100px] px-5 xl:px-0'>
        {/* left side */}
        <div className=''>
          <Reveals>
            <h2 className=' mb-3 xlg:mb-[30px]'>Diverse classes, great <br /> teachers - thats us!</h2>
          </Reveals>
          <Reveals>
            <p className='mb-5 xlg:mb-[50px]'>Ignite your curiosity with our exceptional <br /> teachers and diverse classes.</p>
          </Reveals>
          <div className='bg-[#F5F5F5] p-[30px] w-fit mb-3 xlg:mb-5 '>
            <Reveals>
              <p className='italic'>Experience transformative yoga with them. Expert <br /> instructors, welcoming environment, and holistic benefits. <br /> Join us for mindful movement and inner peace.</p>
            </Reveals>
          </div>
          <div className='flex items-center gap-[15px] '>
            <Image src={profile} alt='image' className='h-[70px] w-[70px] rounded-full object-cover' />
            <Reveals>
              <div>
                <p>Oliver Quenn</p>
                <p className='italic'>Actor</p>
              </div>
            </Reveals>
          </div>
        </div>
        {/* right side */}
        <div className='relative  xm:w-[450px] xl:w-[500px] b-green-500'>
          <Image className='absolute bottom-0   -z-10 object-cover' src={halfCircle} alt='image' />
          <Image className='xlg:ml-[4%] lg:ml-[8%]' src={person} alt='image' />
        </div>
      </section>
    </Container>
  )
}

export default Teachers
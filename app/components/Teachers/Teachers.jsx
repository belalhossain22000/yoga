import Container from '@/app/utils/Container/Container'
import React from 'react';
import Image from 'next/image';
import profile from './image/profile.svg';
import halfCircle from './image/Ellipse 39.png';
import person from './image/person.png';

const Teachers = () => {
  return (
    <Container maxWidth={"max-w-[1168px]"}>

      <section className='flex items-center justify-between'>
        {/* left side */}
        <div>
          <h2>Diverse classes, great <br /> teachers - thats us!</h2>
          <p>Ignite your curiosity with our exceptional <br /> teachers and diverse classes.</p>
          <div className='bg-[#F5F5F5] p-[30px] w-fit '>
            <p className='italic'>Experience transformative yoga with them. Expert <br /> instructors, welcoming environment, and holistic benefits. <br /> Join us for mindful movement and inner peace.</p>
          </div>
          <div className='flex items-center gap-[15px]'>
            <Image src={profile} alt='image' className='h-[70px] w-[70px] rounded-full object-cover' />
            <div>
              <p>Oliver Quenn</p>
              <p className='italic'>Actor</p>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className='relative w-[500px]'>
          <Image className='absolute bottom-0 -left-12 right-0 -z-10 object-cover' src={halfCircle} alt='image' />
          <Image className='-mr-10' src={person} alt='image' />
        </div>
      </section>
    </Container>
  )
}

export default Teachers
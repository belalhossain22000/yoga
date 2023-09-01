import React from 'react'
import Image from 'next/image';
import flower from './image/flower.png'
import greedBg from './image/green-bg.png';
import person from './image/yoga-girl.png';
import largeFlower from './image/big-flower.png';
import running from './image/Running.png';
import mechine from './image/Cardio Machine.png';
import pose from './image/Yoga Pose.png';
import person3 from './image/person3.png';
import Button from '@/app/utils/Button/Button';
import YogaCard from '@/app/components/Hero/YogaCard/YogaCard';
import Container from '@/app/utils/Container/Container';

const Hero = () => {
  return (
    <header>
      <Container maxWidth={"max-w-[1440px]"}>
        {/* top side hero */}
        <div className='flex items-center md:flex-row flex-col space-y-12 justify-center gap-0 px-5 xl:px-[117px]'>
          {/* left side */}
          <div className='b-red-500 '>
            <h1 className='md:mb-[30px] mb-5'>Empower <br /> Through Yoga  <br /><span className='flex items-center gap-5'>Journey <Image className='mt-5' src={flower} alt='flower' /></span> </h1>
            <p className='md:mb-[30px] mb-5'>Empower Through Yoga: Find strength, balance, <br /> connection. Unleash your potential, create change. <br /> Breathe, evolve, empower.</p>
            <h5 className='flex items-end gap-[5px] md:mb-[22px] mb-4'>15.5 <p>Per month</p></h5>
            <Button px={'px-[50px]'} py={'py-[15px]'}>
              GET STARTED
            </Button>
          </div>
          {/* middle side */}
          <div className='flex items-end b-green-500 '>
            <div className='relative xlg:w-[400px] '>
              <Image className='absolute z-10 bottom-12 xm:left-[-10%] ' src={greedBg} alt='green bg' />
              <Image className='relative z-20 ' src={person} alt='person' />

            </div>
            {/* flower */}
            <div className='mb-[-10%] -ml-3 hidden md:block'>
              <Image className='' src={largeFlower} alt='person' />

            </div>
          </div>
          {/* right side */}
          <div className='xl:ml-12 grid grid-cols-2 xm:grid-cols-3 md:grid-cols-1 gap-5 xlg:gap-[50px] items-start b-blue-600 '>
            <YogaCard image={running} title="Outdoor running" speed="Average 12km
"/>
            <YogaCard image={mechine} title="HIIT Cardio" speed="Average 45 minutes
"/>
            <YogaCard image={pose} title="Yoga & Strech" speed="Average 30 minutes
"/>
          </div>
        </div>
        {/* bottom side */}
        <Container maxWidth={"max-w-[950px]"}>

          <div className='bg-re-500 mt-[40px] flex xm:flex-row flex-col items-center justify-between space-y-10 px-5 lg:px-0'>
            {/* person side */}
            <div className=''>
              <Image className='' src={person3} alt='person image' />
            </div>
            {/* text side */}
            <div className='flex items-center gap-7 md:gap-[80px]'>
              <div>
                <h5 className='mb-[10px]'>85+</h5>
                <p>Yoga Classes</p>
              </div>
              <div>
                <h5 className='mb-[10px]'>350+</h5>
                <p>Participant </p>
              </div>
            </div>
          </div>
        </Container>
      </Container>

    </header>
  )
}

export default Hero
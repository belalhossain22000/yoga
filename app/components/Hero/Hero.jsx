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

const Hero = () => {
  return (
    <header className='fle items-center'>
      {/* top side hero */}
      <div className='flex items-center justify-between px-[117px]'>
        {/* left side */}
        <div>
          <h1>Empower <br /> Through Yoga  <br /><span className='flex items-center gap-5'>Journey <Image className='mt-5' src={flower} alt='flower' /></span> </h1>
          <p>Empower Through Yoga: Find strength, balance, <br /> connection. Unleash your potential, create change. <br /> Breathe, evolve, empower.</p>
          <h5 className='flex items-end gap-[5px]'>15.5 <p>Per month</p></h5>
          <Button px={'px-[50px]'} py={'py-[15px]'}>
            GET STARTED
          </Button>
        </div>
        {/* middle side */}
        <div className='flex items-end'>

          <div className='relative w-[490p]'>
            <Image className='absolute z-10 bottom-12 right-8 w-[490px] h-[490p]' src={greedBg} alt='green bg' />
            <Image className='relative z-20 ' src={person} alt='person' />

          </div>
          <div>
            <Image className='' src={largeFlower} alt='person' />

          </div>
        </div>
        {/* right side */}
        <div className='flex flex-col gap-[50px] items-center'>
          <YogaCard image={running} title="Outdoor running" speed="Average 12km
"/>
          <YogaCard image={mechine} title="HIIT Cardio" speed="Average 45 minutes
"/>
          <YogaCard image={pose} title="Yoga & Strech" speed="Average 30 minutes
"/>
        </div>
      </div>
      {/* bottom side */}
      <div className='bg-re-500 mt-[-80px] flex items-center justify-between w-[65%] mx-auto'>
        {/* person side */}
        <div className=''>
          <Image className='' src={person3} alt='person image' />
        </div>
        {/* text side */}
        <div className='flex items-center gap-[80px]'>
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

    </header>
  )
}

export default Hero
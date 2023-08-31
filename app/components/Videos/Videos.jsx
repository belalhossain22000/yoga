import React from 'react'
import Image from 'next/image'
import video from './image/video1.png'
import video2 from './image/video2 .png'
import Container from '@/app/utils/Container/Container'

const Videos = () => {
  return (
    <Container maxWidth={"max-w-[1168px]"}>

      <section>
        <h1 className='text-center'>Free Videos</h1>
        <div className='grid grid-cols-3'>
          <Image src={video} alt='video' />
          <Image src={video2} alt='video' />
          <Image src={video} alt='video' />
        </div>
      </section>

    </Container>
  )
}

export default Videos
import React from 'react'
import Image from 'next/image'
import video from './image/video1.png'
import video2 from './image/video2 .png'
import Container from '@/app/utils/Container/Container'
import VideoCard from './VideoCard'

const Videos = () => {
  return (

    <section className='px-5 xl:px-0 xlg:mt-[100px] mt-10 '>
      <Container maxWidth={"max-w-[1168px]"}>

        <h1 className='text-center mb-[50px]'>Free Videos</h1>


        <div className='video-container gap-5'>
          <VideoCard image={video} />
          <VideoCard image={video2} />
          <VideoCard image={video} />
        </div>


      </Container>
    </section>

  )
}

export default Videos
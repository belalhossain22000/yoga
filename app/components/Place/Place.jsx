
import Container from '@/app/utils/Container/Container'
import React from 'react';
import waterBottle from './image/Water Bottle.png';
import stone from './image/Stones.png';
import workOut from './image/Workout.png';
import welcome from './image/Welcoming.png';
import PlaceCard from './PlaceCard';

const Place = () => {
  return (
    <section className='mt-[100px] px-5 xl:px-0'>
      <Container maxWidth={"max-w-[1168px]"}>
        <h1 className='text-center'>The Place You’ll Love</h1>
        <div className='place-container mt-[50px]'>
          <PlaceCard image={waterBottle} title1="Premium " title12="Water" />
          <PlaceCard image={stone} title1="Control" title12="Stress" />
          <PlaceCard image={workOut} title1="All-In-One  " title12="Workout" />
          <PlaceCard image={welcome} title1="Welcoming " title12="Studios" />

        </div>
      </Container>
    </section>
  )
}

export default Place
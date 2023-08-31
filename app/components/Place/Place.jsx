
import Container from '@/app/utils/Container/Container'
import React from 'react';
import waterBottle from './image/Water Bottle.png';
import stone from './image/Stones.png';
import workOut from './image/Workout.png';
import welcome from './image/Welcoming.png';
import PlaceCard from './PlaceCard';

const Place = () => {
  return (
    <Container maxWidth={"max-w-[1168px]"}>
      <section className='mt-[100px] '>
        <h1 className='text-center'>The Place You’ll Love</h1>
        <div className='grid grid-cols-4 mt-[50px]'>
        <PlaceCard image={waterBottle} title1="Premium " title12="Water"/>
        <PlaceCard image={stone} title1="Control" title12="Stress"/>
        <PlaceCard image={workOut} title1="All-In-One  " title12="Workout"/>
        <PlaceCard image={welcome} title1="Welcoming " title12="Studios"/>

        </div>
      </section>
    </Container>
  )
}

export default Place
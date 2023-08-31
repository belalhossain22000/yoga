import React from 'react'
import festival from './image/festival.png';
import retreats from './image/Retreat.png';
import meditation from './image/Meditation.png';
import CategoryCard from './CategoryCard';

const Category = () => {
  return (
    <section className='bg-re-500 xlg:mt-[68px] mt-10 small-container flex items-center justify-center gap-[110px]'>
      <CategoryCard image={festival} title="Festival" description1="Yoga festivals are events that bring " description2="together yoga enthusiasts "/>
      <CategoryCard image={festival} title="Festival" description1="Yoga festivals are events that bring " description2="together yoga enthusiasts"/>
      <CategoryCard image={festival} title="Festival" description1="Yoga festivals are events that bring " description2="together yoga enthusiasts"/>
    </section>
  )
}

export default Category
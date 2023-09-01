import React from 'react'
import festival from './image/festival.png';
import retreats from './image/Retreat.png';
import meditation from './image/Meditation.png';
import CategoryCard from './CategoryCard';
import Container from '@/app/utils/Container/Container';

const Category = () => {
  return (
    <Container maxWidth={"max-w-[1090px]"}>

    <section className='bg-re-500 xlg:mt-[68px] mt-10 px-5f lg:px-0 flex xm:flex-row flex-col items-center justify-center gap-8 xm:gap-2 md:gap-5 xlg:gap-[110px]'>
      <CategoryCard image={festival} title="Festival" description1="Yoga festivals are events that bring " description2="together yoga enthusiasts "/>
      <CategoryCard image={festival} title="Festival" description1="Yoga festivals are events that bring " description2="together yoga enthusiasts"/>
      <CategoryCard image={festival} title="Festival" description1="Yoga festivals are events that bring " description2="together yoga enthusiasts"/>
    </section>
    </Container>
  )
}

export default Category
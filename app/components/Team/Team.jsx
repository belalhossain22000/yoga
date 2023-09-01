import Container from '@/app/utils/Container/Container'
import React from 'react';
import bg1 from './image/bg1.png';
import bg2 from './image/bg-2.png';
import bg3 from './image/bg-3.png';
import person1 from './image/person1.png';
import person2 from './image/person2.png';
import person3 from './image/person3.png';
import TeachersCard from './TeachersCard';

const Team = () => {
  return (
    <Container maxWidth={"max-w-[1168px]"}>
      <section className='xlg:mt-[100px] mt-10 px-5 xl:px-0'>
        <h2 className='text-center'>Meet Our Talented Team</h2>
        <div className='team-container mt-[50px]'>
          <TeachersCard person={person1} bg={bg1} title="Jessica Smith" name="Vinyasa Yoga Teacher"/>
          <TeachersCard person={person2} bg={bg2} title="John Franklin" name="Yoga Teacher"/>
          <TeachersCard person={person3} bg={bg3} title="John Franklin" name="Hatha Yoga Teacher"/>
        </div>
      </section>
    </Container>
  )
}

export default Team
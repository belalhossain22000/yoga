import React from 'react';
import Image from 'next/image';
import flower from './image/flower.png'
import circle1 from './image/Ellipse 2.png';
import circle2 from './image/Ellipse 3.png';
import person from './image/young-woman-doing-natarajasana-exercise 1.png';
import Button from '@/app/utils/Button/Button';
import Container from '@/app/utils/Container/Container';

const Elevate = () => {
  return (
    <Container maxWidth={"max-w-[1090px]"}>

    <section className='mt-[150px] mt- flex xm:flex-row flex-col items-center justify-between gap-5 px-5 xl:px-0 b-red-600'>
      {/* left side */}
      <div className='relative w-[350px] xm:w-[400px] h-full b-red-500' >
        <Image src={circle1} alt='circle'/>
        <Image className='absolute bottom-0 left-8 right-0 h-[110%] w-auto' src={person} alt='persons'/>
        <Image src={circle2} alt='circle'/>
      </div>
      {/* right side */}
      <div className='flex flex-col items-start gap-3 xlg:gap-[30px]'>
        <h2>Elevate your being: <br /> transform body,  <br />
          mind, life.</h2>
          <p>Are you ready to embark on a life-altering journey of self- <br />transformation? Get ready to unleash your true potential and <br /> experience a profound shift in your body, mind, and overall <br /> quality of life. Heres how you can make it happen:</p>
          <Button px={"px-[50px]"} py={"py-[11px]"}>
          LEARN MORE
          </Button>
      </div>
    </section>
    </Container>
  )
}

export default Elevate
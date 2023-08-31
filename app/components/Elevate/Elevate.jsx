import React from 'react';
import Image from 'next/image';
import flower from './image/flower.png'
import circle1 from './image/Ellipse 2.png';
import circle2 from './image/Ellipse 3.png';
import person from './image/young-woman-doing-natarajasana-exercise 1.png';
import Button from '@/app/utils/Button/Button';

const Elevate = () => {
  return (
    <section className='xlg:mt-[150px] mt-10 flex items-center justify-between small-container b-red-600'>
      {/* left side */}
      <div className='relative'>
        <Image src={circle1} alt='circle'/>
        <Image className='absolute bottom-0 left-10 right-0' src={person} alt='persons'/>
        <Image src={circle2} alt='circle'/>
      </div>
      {/* right side */}
      <div className='flex flex-col items-start gap-[30px]'>
        <h2>Elevate your being: <br /> transform body,  <br />
          mind, life.</h2>
          <p>Are you ready to embark on a life-altering journey of self- <br />transformation? Get ready to unleash your true potential and <br /> experience a profound shift in your body, mind, and overall <br /> quality of life. Heres how you can make it happen:</p>
          <Button px={"px-[50px]"} py={"py-[11px]"}>
          LEARN MORE
          </Button>
      </div>
    </section>
  )
}

export default Elevate
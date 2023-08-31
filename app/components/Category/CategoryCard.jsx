import React from 'react'
import Image from 'next/image'


const CategoryCard = ({ image, title, description1,description2 }) => {
    return (
        <div className='flex flex-col items-center text-center'>
            <Image className='h-[60px] w-[60px] mb-4' src={image} alt='image' />
            <h5 className='mb-4'>Festival</h5>
            <p>{description1} <br /> {description2}</p>
        </div>
    )
}

export default CategoryCard
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const RatingBigger = ({ rating }) => {
  return (
    <div className='flex gap-2'>
          {Array.from({ length: Math.floor(rating) }, (_, i) => i).map((curInt) => {
            return (
              <Image
                src={assets.star_icon}
                height={16}
                width={16}
                alt="rating"
                key={curInt}
              />
            );
          })}
          {Array.from({ length: 5 - Math.floor(rating) }, (_, i) => i).map(
            (curInt) => {
              return (
                <Image
                  src={assets.star_dull_icon}
                  height={16}
                  width={16}
                  alt="rating"
                  key={curInt}
                />
              );
            }
          )}
        </div>
  )
}

export default RatingBigger
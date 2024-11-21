import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import { benefits } from '../constants/constants';

const Benefits = () => {
  const [benefitsData] = useState(benefits);

  return (
    <Marquee
      gradient={true}
      gradientColor={'white'} 
      gradientWidth={100}
      pauseOnHover={true}
      loop={0}
      speed={100}
      className=' overflow-hidden cursor-pointer '
      autoFill={true}
    >
      {benefitsData[0].value.map((benefit, index) => (
        <div key={index} className='benefit-item flex justify-start items-center mx-8 opacity-70 text-primary gap-x-2'>
          <benefit.icon className='text-xl' weight='fill' />
          <h2 className='font-medium'>{benefit.title}</h2>
        </div>
      ))}
    </Marquee>
  );
};

export default Benefits;

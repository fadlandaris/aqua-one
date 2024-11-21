import React, { useState } from 'react';
import styles from '../styles';
import Titles from './Titles';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { superiority } from '../constants/constants';

const Superiority = () => {
  const [superiorityData] = useState(superiority);

  return (
    <main className={`${styles.containerPadding} bg-white rounded-2xl`}>
      <div className='max-w-7xl mx-auto container'>
        <div className='grid grid-cols-3'>
          <div className='col-span-2'>
            <Titles subTitle={'kegunaan'} Title={'Kegunaan Produk Kami'} year={'2024'} />
          </div>
          <div className='flex items-end text-primary'>
            Pipa air berkualitas tinggi untuk kebutuhan rumah tangga dan industri. Tahan lama, anti bocor, dan ramah lingkungan
          </div>
        </div>

        <div className='mt-20'>
          <Swiper slidesPerView={3} spaceBetween={20}>
            {superiorityData[0].value.map((item, i) => (
              <SwiperSlide key={i} className='swiper-slide'>
                <div className='group hover:bg-primary transition-all duration-300 cursor-pointer p-10 rounded-2xl bg-lightgray'>
                  <div className='p-4 rounded-full bg-white inline-block group-hover:bg-primary transition-all duration-300 group-hover:p-0'>
                    <item.icon className='text-2xl text-primary group-hover:rotate-12 group-hover:text-white transition-all duration-300 group-hover:text-5xl' weight='fill'/>
                  </div>
                  <h2 className='text-xl font-semibold text-lightBlack mt-7 mb-5 group-hover:text-white transition-all duration-300'>{item.title}</h2>
                  <p className='text-text group-hover:text-white transition-all duration-300'>{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Superiority;

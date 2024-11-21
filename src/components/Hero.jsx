import React, { useEffect, useState } from 'react'
import { stats } from '../constants/constants'
import { hero } from '../assets/assets'

const Hero = () => {
  const [statData, setStatData] = useState(stats)

  const mainStyle = {
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <main className='w-full h-screen rounded-2xl bg-gray-300 flex items-end relative' style={mainStyle}>
      <div className='max-w-[86rem] grid grid-cols-1 container ml-auto '>
        <div className='text-7xl font-300 text-white  font-semibold'>
          <h2 className='mb-4'>We Spend one-third of </h2>
          <h2>our life work</h2>
        </div>

        <div className='container h-60'>
        </div>

        <div className='conrtainer grid grid-cols-3 '>
          <div className='text-xl flex items-center text-white'>
            See the world through the <br/> prism of design
          </div>

          <div className='col-span-2 bg-white flex items-center justify-between py-10 px-28 rounded-tl-2xl rounded-br-2xl'>
            {statData.map((stat, i) => (
              <div key={i} className=''>
                <h2 className='text-5xl text-primary mb-4 font-semibold'>{stat.title}</h2>
                <p className='text-text'>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
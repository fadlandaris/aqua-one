import React, { useState, useRef } from 'react';
import styles from '../styles';
import Titles from './Titles';
import { about } from '../constants/constants';
import { video } from '../assets/assets';
import { SpeakerHigh, SpeakerX } from '@phosphor-icons/react';
import Benefits from './Benefits';

const About = () => {
  const [aboutData, setAboutData] = useState(about);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main className={`${styles.containerPadding} `}>
      <div className='max-w-7xl mx-auto'>
        <Benefits/>
      </div>
     
      <div className='max-w-7xl mx-auto grid grid-cols-3 gap-x-20 mt-20 '>
        <div className='col-span-2 '>
          {aboutData.map((item, i) => (
            <div key={i}>
              <Titles subTitle={item.sub} Title={item.title} year={item.year} />
              <div className='my-10 text-text '>
                <p className='mb-4'>{item.desc}</p>
                <p>{item.desc2}</p>
              </div>

              <div className='flex justify-start'>
                {item.value.map((value, index) => (
                  <React.Fragment key={index}>
                    <div className='flex justify-start items-center'>
                      <div>
                        <h2 className='font-semibold mb-1 text-lightBlack'>{value.item}</h2>
                        <p className=' text-text'>{value.stat}</p>
                      </div>
                    </div>
                    {index < item.value.length - 1 && (
                      <div className='my-4 border-l-2 border-lightgray h-10 mx-12 '></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='relative rounded-2xl h-[500px] bg-gray-300 overflow-hidden'>
          <video
            ref={videoRef}
            className='object-top'
            src={video}
            autoPlay
            loop
            muted
          ></video>
          <button
            onClick={toggleMute}
            className='absolute bottom-4 right-4 bg-white bg-opacity-75 p-2 rounded-full shadow-md'
          >
            {isMuted ? <SpeakerX/> : <SpeakerHigh/>}
          </button>
        </div>
      </div>

      {/* <Benefits/> */}
    </main>
  );
};

export default About;

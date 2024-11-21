import React from 'react';


const Titles = ({ subTitle, Title, year }) => {
  return (
    <main>
      <p className='uppercase text-primary font-semibold'>{subTitle}</p>
      <h2 className='text-4xl font-bold my-4 text-lightBlack relative'>
        {Title}
      </h2>
      <p className='font-medium text-text'>{year}</p>
    </main>
  );
};

export default Titles;

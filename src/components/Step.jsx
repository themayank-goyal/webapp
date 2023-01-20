import React from 'react';

const Step = ({stepNum, content, heading}) => {
  return (
    <div className='h-52 flex flex-col text-center justify-start items-center gap-2 shadow-lg rounded-md p-4 bg-lightbg w-60'>
      <div className='flex items-center justify-center  p-4  w-4 h-4 bg-white rounded-full'>
        {stepNum}
      </div>
      <h1 className='text-sm font-semibold'>{heading}</h1>
      <p className='text-sm text-center'>
        {content}
      </p>
    </div>
  );
};

export default Step;

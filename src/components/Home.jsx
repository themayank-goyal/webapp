import React from 'react';
import HeroImg from '../assets/hero.png';
import Review from './Review';
import Step from './Step';

const stepData = [
  {
    step: '1',
    content: 'Choose between two types of packages, Depending upon on your requirement and need.',
    heading: 'Choose A Package'
  },
  {
    step: '2',
    heading: 'Connect With Your Therapist',
    content: 'Fill out our form and complete the payment process I Will shortly be in touch with you '
  },
  {
    step: '3',
    content: 'Start your session with Me, a step towards healing.',
    heading: 'Begin Your Healing Journey'
  },
]

const Home = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col justify-center items-center sm:flex-row-reverse sm:justify-between'>
        <img className='sm:w-1/2' src={HeroImg} alt='' />
        <div className='text-center p-2 my-4'>
          <h1 className='lg:text-7xl font-miama text-primary text-5xl p-2 mb-3'>
            Growth, healing and hope
          </h1>
          <p className='text-lg'>From the comfort of your own space</p>
          <p>Individual therapy for adults</p>
          <button className='text-xs font-bold mt-4 bg-primary text-white px-4 py-2 rounded-md'>
            Book Session
          </button>
        </div>
      </div>
      <div className='pb-32 p-16 flex flex-col gap-4 items-center text-center bg-darkbg'>
        <h1 className='mt-2 font-ooohbaby text-xl'>
          “The first step is always the most difficult part of a journey.”
        </h1>
        <p>Begining therapy, like starting most things in life can be scary</p>
        <p className=''>
          I'm committed to assisting you in discovering your best self by
          offering a therapeutic setting that is safe, encouraging, and
          empathetic of your cultural background.
        </p>
        <p>
          Through therapy, I can support you in addressing both recent and
          enduring issues, fostering healthier relationships, managing work-life
          balance, reducing anxiety and depressive symptoms, and improving your
          resilience and capacity for change.
        </p>
      </div>
      <Review />
      <div className='mb-8 bg-darkbg p-8'>
        <h1 className='text-lg font-semibold text-center'>
          Start Online Psychologist Consultation With Three Easy Steps
        </h1>
        <div className='mt-8 flex flex-col justify-center items-center gap-10 sm:flex-row'>
          {
            stepData.map((step) => (
              <Step stepNum={step.step} content={step.content} heading={step.heading} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';

import ICON_ONE from '../assets/location.svg';
import ICON_TWO from '../assets/call.svg';
import ICON_THREE from '../assets/email.svg';

const DATA = [
  {
    id: 1,
    icon: ICON_ONE,
    text: 'Anchal Tower, Sixmile, Guwahati, Assam 781022, India',
  },
  {
    id: 2,
    icon: ICON_TWO,
    text: '+918333552221',
  },
  {
    id: 3,
    icon: ICON_THREE,
    text: 'sayestagoswami.pt@gmail.com',
  },
];

const Contact = () => {
  return (
    <section className='grid grid-cols-1 px-6 sm:grid-cols-2 gap-12 sm:gap-6 my-16 max-w-6xl mx-auto text-primary'>
      <div>
        <h2 className='text-3xl text-center sm:text-left tracking-wider'>
          Contact Us
        </h2>
        <div className='mt-12'>
          <ul className='flex flex-col items-start gap-6'>
            {DATA.map((item) => {
              return <li key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 tracking-wider text-xl">
                <div>
                  <img src={item.icon} alt="item-icon" />
                </div>
                <div>{item.text}</div>
              </li>
            })}
          </ul>
        </div>
      </div>
      <div>
        <form>
          <div className='mb-8'>
            <label htmlFor='name' className='tracking-wide text-dark'>
              Name *
            </label>
            <div className='flex items-center justify-between gap-4 mt-4 '>
              <input
                type='text'
                autoComplete='off'
                id='name'
                className='w-full bg-white rounded-sm p-4'
              />
              <input
                type='text'
                autoComplete='off'
                id='name'
                className='w-full bg-white rounded-sm p-4'
              />
            </div>
          </div>
          <div className='mb-8'>
            <label htmlFor='email' className='tracking-wide text-dark'>
              Email *
            </label>
            <input
              type='text'
              autoComplete='off'
              id='email'
              className='w-full bg-white rounded-sm p-4 mt-4'
            />
          </div>
          <div className='mb-8'>
            <label htmlFor='message' className='tracking-wide text-dark'>
              Message *
            </label>
            <textarea
              autoComplete='off'
              id='email'
              className='w-full bg-white rounded-sm p-4 mt-4'
              rows={8}
            />
          </div>
          <div>
            <button
              type='submit'
              className='bg-primary text-white py-4 px-20 w-full sm:max-w-max rounded-sm mx-auto font-medium'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

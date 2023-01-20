import React from 'react';
import customer from '../assets/customer.svg';
const customerData = [
  {
    Name: 'Emily Kinney',
    Rating: '5',
    Feedback:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Molestiae dolorum explicabo ducimus illo nulla rem distincti voluptatem molestias quam aut illum aliquid recusandae soluta magni praesentium Consequuntur quia nobis voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum fuga',
  },
  {
    Name: 'Emily Kinney',
    Rating: '5',
    Feedback:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Molestiae dolorum explicabo ducimus illo nulla rem distincti voluptatem molestias quam aut illum aliquid recusandae soluta magni praesentium Consequuntur quia nobis voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum fuga',
  },
  {
    Name: 'Emily Kinney',
    Rating: '5',
    Feedback:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Molestiae dolorum explicabo ducimus illo nulla rem distincti voluptatem molestias quam aut illum aliquid recusandae soluta magni praesentium Consequuntur quia nobis voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum fuga',
  },
];
const Review = () => {
  return (
    <div className='bg-darkbg'>
      <h1 className='text-center font-bold text-2xl mb-8'>Customer Reviews</h1>
      <div className='w-100 mx-auto bg-lightbg p-10'>
        <div className='carousel rounded-box px-16'>
          {customerData.map((item) => (
            <div className='flex items-center justify-center gap-8 carousel-item p-8'>
              <div className='flex flex-col justify-center items-center'>
                <img className='w-36' src={customer} alt='' />
                <p>{item.Name}</p>
              </div>
              <div className=''>
                <div></div>
                <p className='w-96'>{item.Feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;

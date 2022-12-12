import React from 'react';

import { quotes } from '../assets';

const FeedBackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-sm md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={quotes}
      alt="double-quotes"
      className="w-[42px] h-[27px] object-contain"
    />
    <p className="font-poppins font-normal leading-[32px] text-white my-10 text-lg">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-12 h-12 rounded-full " />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold  text-white text-xl">
          {name}
        </h4>
        <p className="font-poppins text-white leading-6 text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedBackCard;

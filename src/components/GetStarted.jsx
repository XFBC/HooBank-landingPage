import React from 'react';
import styles from '../styles/styles';

import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-36 h-36 rounded-full bg-blue-gradient p-1 cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-6 mr-2 ">
            {' '}
            <span className="bg-title-gradient bg-clip-text text-transparent">
              Get
            </span>
          </p>
          <img src={arrowUp} alt="arrow" className="w-6 h-6 object-contain" />
        </div>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-6 ">
            {' '}
            <span className="bg-title-gradient bg-clip-text text-transparent">
              Started
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

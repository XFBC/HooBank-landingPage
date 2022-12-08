import React from 'react';
import styles from '../styles/styles';

import GetStarted from '../components/GetStarted';

import { discount, robot } from '../assets';

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* Banner Discount  */}
        <div
          className={`flex flex-row items-center py-1 px-4 rounded-[10px] mb-2 bg-discount-gradient`}
        >
          <img src={discount} alt="descont" className="w-8 h-8" />

          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">
              {' '}
              <span className="font-bold">20%</span> DISCOUNT FOR 1 MONTH
              ACCOUNT
            </span>
          </p>
        </div>

        {/* text  */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-7xl text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The next <br className="sm:block hidden" />{' '}
            <span className="bg-title-gradient bg-clip-text text-transparent">
              Generation
            </span>{' '}
            <br className="hidden sm:block " />
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="lex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          {' '}
          Payment Method.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      {/* robot image  */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={robot} alt="robot" className="w-full h-full relative z-10" />

        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink-gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] top-0 white-gradient rounded-full bottom-40"></div>
        <div className="absolute z-0 w-[50%] h-[55%] bottom-20 blue-gradient"></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;

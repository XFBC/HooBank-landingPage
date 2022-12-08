import React from 'react';
import { stats } from '../contants/index';

import styles from '../styles/styles';

const Stats = () => {
  return (
    <>
      <section
        className={`${styles.flexCenter} sm:flex-row md:flex-row flex-col flex-wrap sm:mb-20 mb-6 text-white`}
      >
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`flex-1 flex justify-start items-center flex-row m-3`}
          >
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-10">
              {stat.value}
            </h4>
            <p className="font-poppins font-normal xs:text-[20px] text-[30px] xs:leading-[26px] leading-5 bg-title-gradient bg-clip-text text-transparent ">
              {stat.title}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Stats;

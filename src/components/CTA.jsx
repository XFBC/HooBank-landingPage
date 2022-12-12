import React from 'react';
import styles from '../styles/styles';
import Button from './Button';

const CTA = () => (
  <>
    <section
      className={`sm:flex-row flex-col sm:text-left text-center ${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px]  `}
    >
      <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-md mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
        <Button />
      </div>
    </section>
  </>
);

export default CTA;

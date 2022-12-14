import React from 'react';
import { features } from '../contants/';
import Button from '../components/Button';
import styles, { layout } from '../styles/styles';
import FeatureCard from './FeautureCard';

const Bussiness = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Bussiness;

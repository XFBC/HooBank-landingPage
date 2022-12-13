import React from 'react';
import styles from '../styles/styles';
import '../styles/index.scss';

import {
  Navbar,
  Billing,
  CardDeal,
  Bussiness,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from '../components/Index';

export default function Home() {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {' '}
          <Hero />{' '}
        </div>
      </div>

      <div className={` bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Bussiness />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </>
  );
}

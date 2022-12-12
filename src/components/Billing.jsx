import React from 'react';

import { apple, bill, google } from '../assets';
import styles, { layout } from '../styles/styles';
import '../styles/index.scss';

const Billing = () => (
  <>
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white-gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink-gradient" />
        <div />
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          {' '}
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>

        <p className={`${styles.paragraph}`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="appStore"
            className="w-32 h-10 object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="googleStore"
            className="w-32 h-10 object-contain mr-5 cursor-pointer"
          />
        </div>
      </div>
    </section>
  </>
);

export default Billing;

import React from 'react';
import { clients } from '../contants';
import styles from '../styles/styles';

const Clients = () => {
  return (
    <>
      <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full `}>
          {clients.map((client) => (
            <div
              key={client.id}
              className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] w-[120px]`}
            >
              <img
                src={client.logo}
                alt="clients"
                className="sm:w-[190px] w-full object-contain "
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Clients;

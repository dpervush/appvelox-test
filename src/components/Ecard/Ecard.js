import React from 'react';
import CardsList from './CardsList/CardsList';

import styles from './Ecard.module.css';

const Ecard = (props) => {
  return (
    <section className={styles.ecard}>
      <div className={styles.container}>
        <h3 className={styles.title}>
          Электронная карта
        </h3>
        <CardsList />
      </div>
    </section>
  );
}

export default Ecard;
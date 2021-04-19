import React from 'react';

import styles from './Card.module.css';

const Card = ({ title, text, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        {children[0]}
      </div>
      <div className={styles.descr}>
        <h4 className={styles.title}>
          {title}
        </h4>
        <div className={styles.divider}></div>
        <div className={styles.text}>
          {text}
        </div>
        <div className={styles.list}>
          {children[1]}
        </div>
      </div>
    </div>
  );
}

export default Card;
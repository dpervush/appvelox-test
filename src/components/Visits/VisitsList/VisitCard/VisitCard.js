import React from 'react';
import Button from '../../../Button/Button';

import styles from './VisitCard.module.css';


const VisitCard = ({ date, address, photo, name, department }) => {
  return (
    <div className={styles.visitCard}>
      <div className={styles.date}>{date}</div>
      <div className={styles.address}>{address}</div>
      <div className={styles.doctor}>
        <img className={styles.photo} src={photo} alt="/" />
        <div className={styles.descr}>
          <div className={styles.name}>{name}</div>
          <div className={styles.department}>{department}</div>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <Button text="Отменить" />
      </div>
    </div>
  );
}

export default VisitCard;
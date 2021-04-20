import React from 'react';
import Button from '../../../Button/Button';

import styles from './VisitCard.module.css';


const VisitCard = ({ dateRow, address, photo, name, department }) => {
  const date = new Date(dateRow);

  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  const dayWeek = days[date.getDay()];
  const day = date.getDate().toString().length === 1 ? "0" + date.getDate() : date.getDate();
  const month = (date.getMonth() + 1).toString().length === 1 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
  const year = date.getFullYear().toString().slice(2, 4);
  const time = `${date.getHours()}:${date.getMinutes()}`;
  const dateString =
    `${dayWeek} ${day}.${month}.${year} | ${time}`;

  return (
    <div className={styles.visitCard}>
      <div className={styles.date}>{dateString}</div>
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
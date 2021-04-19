import React from 'react';
import Card from './Card/Card';

import styles from '../Ecard.module.css';
import InfoIcon from './Card/CardIcons/InfoIcon';
import TestsIcon from './Card/CardIcons/TestsIcon';
import EditIcon from './Card/CardIcons/EditIcon';
import HistoryIcon from './Card/CardIcons/HistoryIcon';

const CardsList = (props) => {
  return (
    <div className={styles.cardsItems}>
      <Card title="Информация о пациенте" text="Узнайте информацию о себе здесь">
        <InfoIcon />
        <ul className={styles.list}>
          <li className={styles.item}><span>Ваши личные данные</span></li>
          <li className={styles.item}><span>Рекомендации врачей</span></li>
          <li className={styles.item}><span>История болезней</span></li>
        </ul>
      </Card>
      <Card title="Результаты анализов" text="Вы можете узнать здесь результаты своих анализов">
        <TestsIcon />
        <ul className={styles.list}></ul>
      </Card>
      <Card title="Добавить  информацию" text="Добавляйте в свою электронную медицинскую карту новые данные">
        <EditIcon />
        <ul className={styles.list}></ul>
      </Card>
      <Card title="История приемов" text="Вся информация о полученных услугах за все время хранится здесь">
        <HistoryIcon />
        <ul className={styles.list}></ul>
      </Card>
    </div>

  );
}

export default CardsList;
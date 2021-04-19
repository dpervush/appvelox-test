import React from 'react';
import Calendar from 'react-calendar';

import VisitsList from '../Visits/VisitsList/VisitsList';

import styles from './Details.module.css';
import './Calendar.css';


const Details = (props) => {
  const [value, onChange] = React.useState(new Date());

  return (
    <div className={styles.details}>
      <div className={styles.container}>
        <h3 className={styles.title}>
          Мои записи
        </h3>
        <div className={styles.wrapper}>
          <div className={styles.visits}>
            <VisitsList />
          </div>
          <div className={styles.calendar}>
            <Calendar
              onChange={onChange}
              value={value}
              locale={'ru-RU'}
              style={{ backgroundColor: '#ffffff' }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Details;
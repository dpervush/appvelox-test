import React from 'react';
import { Link } from 'react-router-dom';


import styles from './Visits.module.css';
import VisitsList from './VisitsList/VisitsList';

const Visits = (props) => {
  return (
    <section className={styles.visits}>
      <div className={styles.container}>
        <h3 className={styles.title}>
          Записи на прием
          </h3>
        <div className={styles.wrapper}>
          <div className={styles.visitsList}>
            <VisitsList />
          </div>
          <div className={styles.more}>
            <div className={styles.text}>Еще 3 записи</div>
            <Link to='/visits'>Подробнее </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Visits;
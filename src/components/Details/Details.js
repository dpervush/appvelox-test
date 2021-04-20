import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import VisitsList from '../Visits/VisitsList/VisitsList';
import { VisitsContext } from '../app/App';

import styles from './Details.module.css';
import backArrow from '../../assets/images/backArrow.svg';
import Calendar from './Calendar/Calendar';

let cx = classNames.bind(styles);

const Details = (props) => {
  const visits = React.useContext(VisitsContext).visits;

  const [visitsToRender, setVisitsToRender] = React.useState(visits);

  const [showAll, setShowAll] = React.useState(false);

  const onShowAllClick = () => {
    setVisitsToRender(visits);
    setShowAll(false);
  }

  return (
    <div className={styles.details}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>
          <img src={backArrow} alt="/" />
        </Link>
        <h3 className={styles.title}>
          Мои записи
        </h3>
        <div className={styles.wrapper}>
          <button className={cx({ btn: true, showAll: showAll })} onClick={onShowAllClick}>
            Показать все записи
          </button>
          <div className={cx({ visits: true, showScroll: visitsToRender.length > 3 ? true : false })}>
            <VisitsList visits={visitsToRender} />
          </div>
          <div className={styles.calendar}>
            <Calendar visits={visits} visitsToRender={visitsToRender} setVisitsToRender={setVisitsToRender} showAll={showAll} setShowAll={setShowAll} />
          </div>
        </div>
      </div>
    </div >
  );
}

export default Details;
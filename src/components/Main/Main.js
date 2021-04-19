import React from 'react';
import Ecard from '../Ecard/Ecard';
import Visits from '../Visits/Visits';

import styles from './Main.module.css';

const Main = (props) => {
  return (
    <div className={styles.main}>
      <Visits />
      <Ecard />
    </div>
  );
}

export default Main;
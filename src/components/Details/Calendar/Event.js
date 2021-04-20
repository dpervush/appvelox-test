import React from 'react';

import styles from './Calendar.css';

const Event = ({ content }) => {
  return (
    <div className={styles.event}>
      {content}
    </div>
  );
}

export default Event;
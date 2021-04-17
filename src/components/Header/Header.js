import React from 'react';
import Eye from '../Icons/Eye';
import Search from '../Icons/Search';
import Bell from '../Icons/Bell';

import styles from './Header.module.css';

import avatar from '../../assets/images/user.jpg';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>Мой профиль</h2>
          <div className={styles.actions}>
            <div className={`${styles.icon} ${styles.searchIcon}`}>
              <Search />
            </div>
            <div className={`${styles.icon} ${styles.bellIcon}`}>
              <Bell />
            </div>
            <div className={`${styles.icon} ${styles.eyeIcon}`}>
              <Eye />
            </div>
          </div>

          {/* TODO: padding with boders */}
          <div className={styles.user}>
            <img className={styles.avatar} src={avatar} alt="/" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
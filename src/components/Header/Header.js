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
            <button className={`${styles.icon} ${styles.searchIcon}`}>
              <Search />
            </button>
            <button className={`${styles.icon} ${styles.bellIcon}`}>
              <Bell />
            </button>
            <button className={`${styles.icon} ${styles.eyeIcon}`}>
              <Eye />
            </button>
          </div>
          <div className={styles.user}>
            <div className={styles.bg}>
              <img className={styles.avatar} src={avatar} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
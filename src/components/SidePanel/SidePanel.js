import React from 'react';

import appvelox from '../../assets/images/appvelox.svg';
import Button from '../Button/Button';

import styles from './SidePanel.module.css';
import logo from '../../assets/images/logo.svg';

const SidePanel = (props) => {
  return (
    <div className={styles.panel}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {/* TODO: add NavLink */}
              <li className={`${styles.navLink} ${styles.active}`}>Профиль</li>
              <li className={styles.navLink}>Врачи и клиники</li>
              <li className={styles.navLink}>Сообщения</li>
              <li className={styles.navLink}>Тестирование</li>
              <li className={styles.navLink}>Полезно знать</li>
            </ul>
            <Button text="Подать заявку" />
          </nav>
          <footer className={styles.footer}>
            <div className={styles.help}>Помощь</div>
            <div className={styles.appVelox}>
              <img src={appvelox} alt='appvelox' />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default SidePanel;
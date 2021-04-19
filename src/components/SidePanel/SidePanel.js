import React from 'react';

import Button from '../Button/Button';
import SideLink from './SideLink/SideLink';
import HeartIcon from './IconsSvg/HeartIcon';
import DoctorsIcon from './IconsSvg/DoctorsIcon';
import BookIcon from './IconsSvg/BookIcon';
import MessageIcon from './IconsSvg/MessageIcon';
import TestIcon from './IconsSvg/TestIcon';


import appvelox from '../../assets/images/appvelox.svg';
import logo from '../../assets/images/logo.svg';



import styles from './SidePanel.module.css';

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
              <SideLink icon={<HeartIcon />} text="Профиль" isActive={true} />
              <SideLink icon={<DoctorsIcon />} text="Врачи и клиники" />
              <SideLink icon={<MessageIcon />} text="Сообщения" />
              <SideLink icon={<TestIcon />} text="Тестирование" />
              <SideLink icon={<BookIcon />} text="Полезно знать" />
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
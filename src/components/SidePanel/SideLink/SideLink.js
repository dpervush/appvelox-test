import { Link } from 'react-router-dom';
import styles from './SideLink.module.css';

function SideLink({ text, icon, isActive = false }) {
  return (
    <li className={`${styles.navItem} ${isActive && styles.active}`}>
      <Link to="/" className={styles.navLink}>
        {icon}
        <span className={styles.text}>{text}</span>
      </Link>
    </li>
  );
}

export default SideLink;

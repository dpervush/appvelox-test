import Header from '../Header/Header';
import SidePanel from '../SidePanel/SidePanel';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <SidePanel />
      <Header />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from '../Details/Details';

import Header from '../Header/Header';
import Main from '../Main/Main';
import SidePanel from '../SidePanel/SidePanel';

import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <SidePanel />
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/visits" component={Details} />
      </div>
    </Router>
  );
}

export default App;

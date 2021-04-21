import { createContext } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Details from '../Details/Details';

import Header from '../Header/Header';
import Main from '../Main/Main';
import SidePanel from '../SidePanel/SidePanel';

import styles from './App.module.css';
import doctor1 from '../../assets/images/doctor-1.jpg';
import doctor2 from '../../assets/images/doctor-2.jpg';

const defaultStore = {
  "visits": [
    {
      "date": "2021-04-20T15:30",
      "address": "СПБ ГБУЗ \"Городская поликлиника №25\", пр. Солидарности, д. 1, к. 1, лит. А",
      "doctor": {
        "name": "Малушко Т.Н.",
        "photo": doctor1
      },
      "department": "Хирургия"
    },
    {
      "date": "2021-04-20T18:30",
      "address": "СПБ ГБУЗ \"Городская поликлиника №25\", пр. Солидарности, д. 1, к. 1, лит. А",
      "doctor": {
        "name": "Харьков В. С.",
        "photo": doctor2
      },
      "department": "Терапевтическое отделение"
    },
    {
      "date": "2021-01-15T18:30",
      "address": "СПБ ГБУЗ \"Городская поликлиника №25\", пр. Солидарности, д. 1, к. 1, лит. А",
      "doctor": {
        "name": "Малушко Т.Н.",
        "photo": doctor1
      },
      "department": "Хирургия"
    },
    {
      "date": "2021-01-15T18:30",
      "address": "СПБ ГБУЗ \"Городская поликлиника №25\", пр. Солидарности, д. 1, к. 1, лит. А",
      "doctor": {
        "name": "Малушко Т.Н.",
        "photo": doctor1
      },
      "department": "Хирургия"
    },
    {
      "date": "2021-04-30T18:30",
      "address": "СПБ ГБУЗ \"Городская поликлиника №25\", пр. Солидарности, д. 1, к. 1, лит. А",
      "doctor": {
        "name": "Малушко Т.Н.",
        "photo": doctor1
      },
      "department": "Хирургия"
    }
  ]
};

export const VisitsContext = createContext();

function App() {
  return (
    <VisitsContext.Provider value={defaultStore}>
      <Router>
        <div className={styles.app}>
          <SidePanel />
          <Header />
          <Route exact path="/" component={Main} />
          <Route path="/visits" component={Details} />
        </div>
      </Router>
    </VisitsContext.Provider>
  );
}

export default App;

import React from 'react';

import VisitCard from './VisitCard/VisitCard';

import styles from '../Visits.module.css';
import doctor1 from '../../../assets/images/doctor-1.jpg';
import doctor2 from '../../../assets/images/doctor-2.jpg';


const VisitsList = (props) => {
  return (
    <>
      <VisitCard
        date="Понедельник 15.06.20 | 15:30 "
        address='СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А'
        photo={doctor1}
        name="Малушко Т. Н."
        department="Хирургия" />
      <VisitCard
        date="Понедельник 15.06.20 | 18:30 "
        address='СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А'
        photo={doctor2}
        name="Харьков В. С."
        department="Терапевтическое отделение" />
    </>
  );
}

export default VisitsList
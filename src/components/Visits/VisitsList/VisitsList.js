import React from 'react';
import VisitCard from './VisitCard/VisitCard';

const VisitsList = ({ visits }) => {

  const renderVisits = () => {
    return visits.map((visit, ind) => {
      return (
        <VisitCard
          key={ind}
          dateRow={visit.date}
          address={visit.address}
          photo={visit.doctor.photo}
          name={visit.doctor.name}
          department={visit.department} />
      )
    })
  }

  return (
    <>
      {renderVisits()}
    </>
  );
}

export default VisitsList
import React from 'react';
import RcCalendar from 'react-calendar';
import './Calendar.css';
import Event from './Event';

let context = {};

function tileContent({ date, view }) {
  if (view === 'month') {
    const visitsInDay = context.filter(visit => {
      return new Date(visit.date).setHours(0, 0, 0, 0) === date.setHours(0, 0, 0, 0);
    })
    if (visitsInDay.length > 0) {
      return (<Event content={visitsInDay.length} />);
    } else {
      return;
    }
  }
}

const Calendar = ({ visits, setVisitsToRender, showAll, setShowAll }) => {
  const [value, onChange] = React.useState(new Date());
  context = visits;

  function onClickDay(e) {
    setShowAll(true);
    setVisitsToRender(visits.filter(item => {
      return new Date(item.date).setHours(0, 0, 0, 0) === e.setHours(0, 0, 0, 0)
    }))
  };

  function tileClassName({ view }) {
    if (view === 'month' && showAll) {
      return 'react-calendar__tile--border';
    }
  }

  return (
    <RcCalendar
      onChange={onChange}
      value={value}
      locale={'ru-RU'}
      tileContent={tileContent}
      tileClassName={tileClassName}
      onClickDay={onClickDay}
    />
  );
}

export default Calendar;
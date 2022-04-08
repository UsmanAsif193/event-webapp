import React from 'react';
import Event from '../../components/Event';
import './EventList.css';
function EventList(props) {
  const sortEvents = (events) => {
    return events.sort((a, b) => {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);

      if (dateA < dateB) {
        return -1;
      } else if (dateA > dateB) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className='event-list' id='list'>
      {sortEvents(props.events).map((event, index) => {
        if (index === 0) {
          return (
            <Event key={event._id} id={event._id} event={event} isNext={true} />
          );
        } else {
          return (
            <Event
              key={event._id}
              id={event._id}
              event={event}
              isNext={false}
              deleteEvent={props.deleteEvent}
            />
          );
        }
      })}
    </div>
  );
}

export default EventList;

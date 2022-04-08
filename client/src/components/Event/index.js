import React from 'react';
import './Event.css';
import moment from 'moment';
import deleteIcon from './cross.png';

function Event({ id, event, isNext, deleteEvent }) {
  return isNext ? (
    // Upcoming Event
    <div className='next-event-item'>
      <h3>NEXT EVENT</h3>
      <div className='next-event-item-content'>
        <div className='next-event-date'>
          {moment(event.date).format('Do MMM')}
        </div>

        <div className='next-event-info'>
          <h1 className='event-title'>{event.title}</h1>
          <div className='next-event-logistics'>
            <p className='event-time'>
              {moment(event.date).format('h:mm a - MMMM Do, YYYY')}
            </p>
            <p className='event-location'>@ {event.venue}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    // Next Event
    <div className='event-item'>
      <div className='event-date'>
        <p>{moment(event.date).format('Do')}</p>
        <p>{moment(event.date).format('MMM')}</p>
      </div>

      <div className='event-info'>
        <h1 className='event-title'>{event.title}</h1>
        <div className='event-logistics'>
          <p className='event-time'>
            {moment(event.date).format('h:mm a - LL')}
          </p>
          <p className='event-location'>@ {event.venue}</p>
        </div>

        <button
          className='delete-button'
          onClick={() => {
            deleteEvent(id);
          }}>
          <img src={deleteIcon} alt='cross-button' />
        </button>
      </div>
    </div>
  );
}

export default Event;

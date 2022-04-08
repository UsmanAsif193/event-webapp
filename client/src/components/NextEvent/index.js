import React from 'react';
import moment from 'moment';
import './NextEvent.css';

function NextEvent ({event}) {
  
  return (
    <div className = "next-event-item">
      <h3>NEXT EVENT</h3>
      <div className = "next-event-item-content">
        <div className = "next-event-date">{moment(event.date).format('Do MMM')}</div>
  
        <div className = "next-event-info">
          <h1 className = "event-title">{event.title}</h1>
          <div className = "next-event-logistics">
            <p className = "event-time">{moment(event.date).format('h:mm a - MMMM Do, YYYY')}</p>
            <p className = "event-location">@ {event.venue}</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default NextEvent;

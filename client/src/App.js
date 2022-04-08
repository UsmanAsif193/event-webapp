import React, { useState, useEffect } from 'react';
import './App.css';
import EventForm from './containers/EventForm';
import EventList from './containers/EventList';
import ApiClient from './services/ApiClientService/index';
import dotenv from 'dotenv';
dotenv.config();

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    ApiClient.getEvents().then((events) => {
      // Filter out events coming from DB to only grab upcoming ones
      setEvents(filterEvents(events));
    });
  }, []);

  function postEvent(info) {
    ApiClient.postEvent(info).then((response) => {
      console.log(response);
      setEvents((currentEvents) => {
        return [...currentEvents, response];
      });
    });
  }

  function deleteEvent(id) {
    ApiClient.deleteEvent(id).then((events) => {
      setEvents(filterEvents(events));
    });
  }
  
    function filterEvents(events) {
      return events.filter((event) => new Date(event.date) > Date.now());
    };

  return (
    <div className='main-container'>
      <EventList className='list' events={events} deleteEvent={deleteEvent} />
      <EventForm className='form' postEvent={postEvent} />
    </div>
  );
}

export default App;

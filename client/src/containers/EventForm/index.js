import React, {useState} from 'react';
import './EventForm.css';

function EventForm ({postEvent}) {
  const [eventInfo, setEventInfo] = useState({
    title: '',
    date: '',
    venue: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    if(checkDate()) {
      postEvent(eventInfo);
      setEventInfo({
        title: '',
        date: '',
        venue: '',
      })
    } 
  }

  function handleChange(e) {
    setEventInfo(currentInfo => {
        return {
          ...currentInfo, 
          [e.target.name]: e.target.value
        }
    })
    e.persist();
  }

  function checkDate() {
    return new Date(eventInfo.date) > Date.now();
  }

  return (
    <div className = "event-submit">
      <form className = "event-form" onSubmit = {handleSubmit}>

        <div className = "create-event">
          <h1>CREATE A NEW EVENT</h1>
        </div>

        <div>
          <p className = "title">TITLE</p>
          <input className = "form-control" name = "title" value = {eventInfo.title} onChange = {handleChange} type="text"/>
        </div>

        <div>
          <p className = "date">DATE</p>
          {checkDate() || !eventInfo.date ? 
          (<input className = "form-control" name = "date" value = {eventInfo.date} onChange = {handleChange} type = "datetime-local" />) : 
          <input className = "form-control is-invalid" name = "date" value = {eventInfo.date} onChange = {handleChange} type = "datetime-local" />
          }
        </div>

        <div>
          <p className = "venue">VENUE</p>
          <input className = "form-control" name = "venue" value = {eventInfo.venue} onChange = {handleChange} type="text"/>
        </div>

      
        <button className = "submit-button" type = "submit"><span>Create</span></button>

      </form>
    </div>
  )

}

export default EventForm;

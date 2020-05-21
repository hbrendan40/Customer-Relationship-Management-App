import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import './style/MyCalendar.css'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class MyCalendar extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Follow up with Client"
      },
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Meeting with Chris"
      },

    ]
  };






  componentDidMount(){
    this.getEvents()
}

getEvents = _ => {
  console.log(moment().toDate());
}

  render() {
    return (
      <div>
        <div className="backgroundLayout">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
        </div>
       
        
      </div>
    );
  }
}

export default MyCalendar;

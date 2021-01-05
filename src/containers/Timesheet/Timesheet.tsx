import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import {events} from '../../store/events/events';

import './Timesheet.css';

class Timesheet extends Component {

    render() {

        return (
            <div className="Timesheet">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin]}
                    events={events}
                    headerToolbar={{left: "prev,next",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay"
                    }}
                    locale="hr"
                />
            </div>
        )
    }
}

export default withRouter(Timesheet);

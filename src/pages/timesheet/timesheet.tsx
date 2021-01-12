import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
//import {DateClickArg} from "@fullcalendar/interaction"
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

import './timesheet.css';
import {WorkingHoursModal} from "../../hoc/working-hours-modal";
import {EventsEdit} from "./events-helper/events-edit";

class Timesheet extends Component<any, any> {

    state = {
        calendarEvents: [
            {
                title: "HOHO", start: new Date('January 7, 2021 08:24:00'), end: new Date('January 7, 2021 08:50:00'), editable: true
            },
            {
                title: "HO", date: new Date('January 04, 2021 08:05:00'), editable:true
            },
            {
                title: "Intellexi", date: new Date('January 05, 2021 08:17:00'), editable: true
            }

        ],
        show: false,
        showDialogEdit: false,
        editEvent: undefined
    }

    calendarRef = React.createRef()

    render() {

        return (
          <div className="Timesheet">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,resourceTimeGridPlugin]}
                events={this.state.calendarEvents}
                headerToolbar={{
                    left: "prev,next workStartButton workEndButton addNewEvent",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                }}
                locale="hr"
                //dateClick={(arg) => this.handleDateClick(arg)}
                customButtons={{
                    workStartButton: {
                        text: 'Početak rada',
                        click: this.workStart
                    },
                    workEndButton: {
                        text: 'Kraj rada',
                        click: this.workEnd
                    },
                    addNewEvent:{
                        text: 'Dodaj novi događaj',
                        click: this.showDialogModal
                    }
                }}
                selectable={true}
                eventClick={(info) => {
                    console.log(info.event)
                    this.showDialogModal()
                }}
              />
              <div>
                  <EventsEdit open={this.state.showDialogEdit} handleClose={this.closeDialogModal} event={this.state.editEvent} addNewEventHandler={this.addNewEventHandler} />
              </div>
              <button  onClick={() => {
                  this.showModal();
              }}
              > SHOW ALL EVENTS </button>
              <div>
                {this.state.show ? <WorkingHoursModal calendarEvents={this.state.calendarEvents} /> : null}
              </div>
          </div>
        )
    }

    workStart = () => {
        let now = new Date();
        this.setState({
            ...this.state,
            calendarEvents: [...this.state.calendarEvents,{title:"WorkHours",start:new Date(), end:now.setHours(now.getHours() + 8), editable:true}]
        })
    }

    workEnd = () => {
        let workingHours = this.state.calendarEvents.findIndex(obj => obj.title === "WorkHours" && this.checkIfCurrentDay(obj.start));
        let newEvents = [...this.state.calendarEvents];
        newEvents[workingHours].end = new Date();
        this.setState({
            ...this.state,
            calendarEvents: newEvents
        })
    }

    checkIfCurrentDay = (currentDate?:Date) => {
        let now = new Date();
        if(now.getDate() === currentDate?.getDate() && now.getMonth() === currentDate?.getMonth() && now.getFullYear() === currentDate?.getFullYear()){
            return true;
        }
        return false;
    }

    // handleDateClick = (arg:DateClickArg) => {
    //     this.setState({
    //         ...this.state,
    //         calendarEvents: [...this.state.calendarEvents,{title:"StartOfWork",start:new Date()}]
    //     })
    // }

    showModal = () =>  {
        this.setState({
            ...this.state,
            show:!this.state.show
        })
    }

    showDialogModal = () => {
        this.setState({
            ...this.state,
            // eventEdit: info,
            showDialogEdit: true
        })
    }

    closeDialogModal = () => {
        this.setState({
            ...this.state,
            showDialogEdit: false
        })
    }

    addNewEventHandler = (values:any) => {
        console.log(values);
        this.setState({
            ...this.state,
            showDialogEdit: false,
            calendarEvents: [...this.state.calendarEvents,{title: values.title, start: values.start, end: values.end, editable: true}]
        })
    }
}

export default withRouter(Timesheet);

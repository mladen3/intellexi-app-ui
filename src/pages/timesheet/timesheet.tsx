import React, {Component} from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
//import {DateClickArg} from "@fullcalendar/interaction"
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

import './timesheet.css';
import {WorkingHoursModal} from "../../hoc/working-hours-modal";
import {EventsEdit} from "./events-helper/events-edit";
import moment from "moment/moment";
import {IEvent} from "../../model/common/IEvent";
import { EventInput } from "@fullcalendar/core";
import {IProject} from "../../model/common/IProject";

moment.updateLocale('en', {
    week: {
        dow: 1,
    },
})

interface IProps{
    events: IEvent[] | undefined,
    createEvent: (event: IEvent) => void,
    deleteEvent: (eventId: number) => void,
    updateEvent: (event: IEvent) => void,
    projects: IProject[] | undefined,
    fetchProjects: () => void
}

export class Timesheet extends Component<IProps, any> {

    // to do clear state from unused variables

    state = {
        calendarEvents: [
            {
                id: "1",
                title: "HOHO",
                start: new Date('January 7, 2021 08:24:00'),
                end: new Date('January 7, 2021 08:50:00'),
                editable: true
            },
            {
                id:"2",title: "WorkHours", start: new Date('January 04, 2021 08:05:00'),end: new Date('January 04, 2021 10:05:00')  ,editable: true
            },
            {
                id:"3",title: "Intellexi", date: new Date('January 05, 2021 08:17:00'), editable: true
            },
            {
                id:"4",title: "Test", start: new Date('January 13, 2021 08:24:00'), end: new Date('January 13, 2021 10:24:00'), editable: true
            },
            {
                id:"5",title: "WorkHours", start: new Date('January 10, 2021 08:24:00'), end: new Date('January 10, 2021 10:24:00'), editable: true
            },
            {
                id:"6",title: "WorkHours", start: new Date('January 11, 2021 08:24:00'), end: new Date('January 11, 2021 10:24:00'), editable: true
            },
            {
                id:"7",title: "Nedjelja", start: new Date('January 17, 2021 08:24:00'), end: new Date('January 17, 2021 10:24:00'), editable: true
            },
            {
                id:"8",title: "Srijeda", start: new Date('January 20, 2021 08:24:00'), end: new Date('January 20, 2021 10:24:00'), editable: true
            },

        ],
        show: false,
        showDialogEdit: false,
        editEvent: {title: "",start: new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0], end: new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0]},
        checkIfNew: true
    }

    calendarRef = React.createRef()


    render() {
        console.log("u komponenti",this.props.events);
        console.log("projects:", this.props.projects);


        return (
          <div className="Timesheet">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, resourceTimeGridPlugin]}
                events={this.props.events?.map(event => ({
                    id: event.id,
                    title: event.title,
                    start: event.start,
                    end: event.end,
                    editable: event.editable
                })) as unknown as EventInput[]}
                headerToolbar={{
                    left: "prev,next workStartButton workEndButton addNewEvent",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay fetchWorkingHours"
                }}
                locale="hr"
                //dateClick={(arg) => this.handleDateClick(arg)}
                customButtons={{
                    workStartButton: {
                        text: 'Start of work',
                        click: this.workStart
                    },
                    workEndButton: {
                        text: 'End of work',
                        click: this.workEnd
                    },
                    addNewEvent: {
                        text: 'Add new event',
                        click: this.showDialogModal
                    },
                    fetchWorkingHours: {
                      text: 'Working hours of week',
                      click: this.fetchWorkingHoursForWeekHandler
                    }
                }}
                selectable={true}
                eventClick={(info) => {
                    let event = this.props.events?.find(obj => String(obj.id) === info.event.id);
                    this.editDialogModal(event);
                }}
              />
              <div>
                  <EventsEdit open={this.state.showDialogEdit} handleClose={this.closeDialogModal}
                              editEvent={this.state.editEvent} addNewEventHandler={this.addNewEventHandler} checkIfNew={this.state.checkIfNew}
                              updateEvent={this.updateEventHandler} deleteEvent={this.deleteEventHandler} projects={this.props.projects}
                  />
              </div>
              <button onClick={() => {
                  this.showModal();
              }}
              > SHOW ALL EVENTS
              </button>
              <div>
                  {this.state.show ? <WorkingHoursModal calendarEvents={this.props.events}/> : null}
              </div>
          </div>
        )
    }

    workStart = () => {
        let start = new Date();
        this.setState({
            ...this.state,
            calendarEvents: [...this.state.calendarEvents, {
                id: (this.state.calendarEvents.length + 1).toString(),
                title: "WorkHours",
                start: new Date(new Date().setMinutes(new Date().getMinutes() - 5)),
                end: start.setHours(start.getHours() + 8),
                editable: true
            }]
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

    checkIfCurrentDay = (currentDate?: Date) => {
        let now = new Date();
        if (now.getDate() === currentDate?.getDate() && now.getMonth() === currentDate?.getMonth() && now.getFullYear() === currentDate?.getFullYear()) {
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

    showModal = () => {
        this.setState({
            ...this.state,
            show: !this.state.show
        })
    }

    showDialogModal = () => {
        this.setState({
            ...this.state,
            checkIfNew: true,
            //eventEdit: undefined,
            showDialogEdit: true
        })
    }

    editDialogModal = (event:any) => {
        this.setState({
            ...this.state,
            checkIfNew: false,
            showDialogEdit: true,
            editEvent: event
        })
    }

    closeDialogModal = () => {
        this.setState({
            ...this.state,
            showDialogEdit: false
        })
    }

    addNewEventHandler = (values: any) => {
        this.setState({
            ...this.state,
            showDialogEdit: false,
        })
        this.props.createEvent(values);
    }

    updateEventHandler = (values: any) => {
        this.setState({
            ...this.state,
            showDialogEdit: false,
        })
        this.props.updateEvent(values);
    }

    deleteEventHandler = (eventId: any) => {
        console.log(eventId);
        this.setState({
            ...this.state,
            showDialogEdit: false,
        })
        this.props.deleteEvent(eventId);
    }

    checkerForWorkingHours = (eventDate: any) => {
        const currentDate = new Date();
        if(moment(currentDate).year() === moment(eventDate).year() && moment(currentDate).month() === moment(eventDate).month() && moment(currentDate).week() === moment(eventDate).week() && moment(currentDate).date() !== moment(eventDate).date()){
            return true;
        }
        return false;
    }

    fetchWorkingHoursForWeekHandler = () =>{
        let events = this.props.events?.filter(obj => obj.title === "WorkHours" && this.checkerForWorkingHours(obj.start));
        let timeWorked = 0;
        if(events !== undefined) {
            events.forEach(event => {
                if (event.end !== undefined && event.start !== undefined) {
                    timeWorked += new Date(event.end).getTime() - new Date(event.start).getTime();
                }
            })
            this.msToTime(timeWorked);
        }
    }
     msToTime = (s:number) => {
        let ms = s % 1000;
        s = (s - ms) / 1000;
        let secs = s % 60;
        s = (s - secs) / 60;
        let mins = s % 60;
        let hrs = (s - mins) / 60;

        alert('this week you have worked for'+ ' ' + hrs + ' hours' + ' and ' + mins + ' minutes');
    }
}


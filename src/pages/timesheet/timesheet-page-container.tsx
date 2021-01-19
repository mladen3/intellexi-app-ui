import * as React from "react";
import {Component} from "react";
import {Timesheet} from "./timesheet";
import {IEvent} from "../../model/common/IEvent";
import {IAppState} from "app-store";
import {connect} from "react-redux";
import {
    createEventAction,
    deleteEventAction,
    fetchEventsAction,
    updateEventAction
} from "../../store/events/events.actions";



interface IProps{
    events: IEvent[] | undefined,
    fetchEvents: () => void,
    createEvent: (event: IEvent) => void,
    deleteEvent: (eventId: number) => void,
    updateEvent: (event: IEvent) => void
}

interface IState{
    modalOpened: boolean //to do (move modal opening here)
}
class TimesheetPageContainer extends Component<IProps, IState> {

    componentDidMount() {
        this.props.fetchEvents();
    }

    public render() {

        return (
          <React.Fragment>
              <Timesheet  events={this.props.events} createEvent={this.props.createEvent} deleteEvent={this.props.deleteEvent} updateEvent={this.props.updateEvent}/>
          </React.Fragment>
        )
    }
}

function mapStateToProps(state: IAppState){
    return {
        events: state.events.data
    }
}


function mapDispatchToProps(dispatch: any){
    return{
        fetchEvents:() => dispatch(fetchEventsAction()),
        createEvent:(event: IEvent) => dispatch(createEventAction(event)),
        deleteEvent: (eventId: number) => dispatch(deleteEventAction(eventId)),
        updateEvent: (event: IEvent) => dispatch(updateEventAction(event))

    }
}

export const TimeSheetPageContainer = connect(mapStateToProps, mapDispatchToProps)(TimesheetPageContainer);

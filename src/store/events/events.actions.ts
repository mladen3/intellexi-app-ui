import * as actionTypes from "./events.action-types";
import {IEvent} from "../../model/common/IEvent";


export const fetchEventsAction = () => ({type: actionTypes.FETCH_EVENTS, payload: undefined});
export const fetchEventsActionSuccess = (events: IEvent[]) => ({type: actionTypes.FETCH_EVENTS_SUCCESS, payload: events});
export const fetchEventsActionError = (error: any) => ({type: actionTypes.FETCH_EVENTS_ERROR, payload: error});

export const fetchEventAction = (eventId: number) => ({type: actionTypes.FETCH_EVENT, payload: eventId});
export const fetchEventActionSuccess = (event: IEvent) => ({type: actionTypes.FETCH_EVENT_SUCCESS, payload: event});
export const fetchEventActionError = (error: any) => ({type: actionTypes.CREATE_EVENT_ERROR, payload: error});

export const deleteEventAction = (eventId: number) => ({type: actionTypes.DELETE_EVENT, payload: eventId});
export const deleteEventActionError = (error: any) => ({type: actionTypes.DELETE_EVENT_ERROR, payload: error});

export const createEventAction = (event: IEvent) => ({type: actionTypes.CREATE_EVENT, payload: event});
export const createEventActionError = (error: any) => ({type: actionTypes.CREATE_EVENT_ERROR, payload: error});

export const updateEventAction = (event: IEvent) => ({type: actionTypes.UPDATE_EVENT, payload: event});
export const updateEventActionError = (error: any) => ({type: actionTypes.UPDATE_EVENT_ERROR, payload: error});

import {IEvent} from "../../model/common/IEvent";
import {IAction} from "app-store";
import * as actionTypes from "./events.action-types";


export interface IEventsState{
    data: IEvent[] | undefined;
    error: undefined;
    loading: boolean;

}

const initialState: IEventsState = {
    data: undefined,
    error: undefined,
    loading: false
}

export const eventsReducer = (state: IEventsState = initialState, action: IAction<any>) => {

    switch(action.type){
        case actionTypes.FETCH_EVENTS:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case actionTypes.FETCH_EVENTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case actionTypes.FETCH_EVENT:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_EVENT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case actionTypes.FETCH_EVENT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case actionTypes.DELETE_EVENT:
            return {
                ...state,
                loading: true
            }
        case actionTypes.DELETE_EVENT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case actionTypes.CREATE_EVENT:
            return {
                ...state,
                loading: true
            }
        case actionTypes.CREATE_EVENT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case actionTypes.UPDATE_EVENT:
            return {
                ...state,
                loading: true
            }
        case actionTypes.UPDATE_EVENT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

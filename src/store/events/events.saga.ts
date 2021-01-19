import {IEvent} from "../../model/common/IEvent";
import * as service from "./events.service";
import {call, put, takeLatest} from "redux-saga/effects";
import * as actions from "./events.actions";
import {IAction} from "app-store";
import * as actionTypes from "./events.action-types";


export function* fetchEventsSaga(){
    try{
        const events: IEvent[] = yield call(service.fetchEvents);
        yield put(actions.fetchEventsActionSuccess(events));
    }
    catch (error){
        yield put(actions.fetchEventActionError(error));
    }
}

export function* deleteEventSaga(action: IAction<any>){
    try{
        yield call(service.deleteEvent, action.payload);
        yield put(actions.fetchEventsAction());
    }
    catch (error){
        yield put(actions.deleteEventActionError(error));
    }
}

export function* createEventSaga(action: IAction<any>){
    try{
        yield call(service.createEvent, action.payload);
        yield put(actions.fetchEventsAction());
    }
    catch (error){
        yield put(actions.createEventActionError(error));
    }
}

export function* updateEventSaga(action: IAction<any>){
    try{
        yield call(service.updateEvent,action.payload);
        yield put(actions.fetchEventsAction());
    }
    catch (error){
        yield put(actions.updateEventActionError(error));
    }
}

export function* watchEventsSaga(){
    yield takeLatest(actionTypes.FETCH_EVENTS, fetchEventsSaga);
    yield takeLatest(actionTypes.DELETE_EVENT, deleteEventSaga);
    yield takeLatest(actionTypes.CREATE_EVENT, createEventSaga);
    yield takeLatest(actionTypes.UPDATE_EVENT, updateEventSaga);
}


import {IProject} from "../../model/common/IProject";
import {call, put, takeLatest} from "redux-saga/effects";
import * as service from "./projects.service";
import * as actions from "./projects.actions";
import {IAction} from "app-store";
import * as actionTypes from "./projects.action-types";

export function* fetchProjectsSaga(){
    try{
        const projects: IProject[] = yield call(service.fetchProjects);
        yield put(actions.fetchProjectsActionSuccess(projects));
    }
    catch (error){
        yield put(actions.fetchProjectActionError(error));
    }
}

export function* deleteProjectSaga(action: IAction<any>){
    try{
        yield call(service.deleteProject, action.payload);
        yield put(actions.fetchProjectsAction());
    }
    catch (error){
        yield put(actions.deleteProjectActionError(error));
    }
}

export function* createProjectSaga(action: IAction<any>){
    try{
        yield call(service.createProject, action.payload);
        yield put(actions.fetchProjectsAction());
    }
    catch (error){
        yield put(actions.createProjectActionError(error));
    }
}

export function* updateProjectSaga(action: IAction<any>){
    try{
        yield call(service.updateProject, action.payload);
        yield put(actions.fetchProjectsAction());
    }
    catch (error){
        yield put(actions.updateProjectActionError(error));
    }
}

export function* watchProjectsSaga(){
    yield takeLatest(actionTypes.FETCH_PROJECTS, fetchProjectsSaga);
    yield takeLatest(actionTypes.DELETE_PROJECT, deleteProjectSaga);
    yield takeLatest(actionTypes.CREATE_PROJECT, createProjectSaga);
    yield takeLatest(actionTypes.UPDATE_PROJECT, updateProjectSaga);
}

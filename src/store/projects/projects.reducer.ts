import {IProject} from "../../model/common/IProject";
import {IAction} from "app-store";
import * as actionTypes from "./projects.action-types";


export interface IProjectsState{
    data: IProject[] | undefined;
    error: undefined;
    loading: boolean;
}

const initialState: IProjectsState = {
    data: undefined,
    error: undefined,
    loading: false
}


export const projectsReducer = (state: IProjectsState = initialState, action: IAction<any>) => {

    switch (action.type){
        case actionTypes.FETCH_PROJECTS:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case actionTypes.FETCH_PROJECTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case actionTypes.DELETE_PROJECT:
            return {
                ...state,
                loading: true
            }
        case actionTypes.DELETE_PROJECT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case actionTypes.UPDATE_PROJECT:
            return{
                ...state,
                loading: true
            }
        case actionTypes.UPDATE_PROJECT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case actionTypes.FETCH_PROJECT:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_PROJECT_ERROR:
            return {
                ...state,
                loading: false
            }
        case actionTypes.CREATE_PROJECT:
            return {
                ...state,
                loading: true
            }
        case actionTypes.CREATE_PROJECT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}

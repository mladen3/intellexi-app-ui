import * as actionTypes from "./projects.action-types";
import {IProject} from "../../model/common/IProject";



export const fetchProjectsAction = () => ({type: actionTypes.FETCH_PROJECTS, payload: undefined});
export const fetchProjectsActionSuccess = (projects: IProject[]) => ({type: actionTypes.FETCH_PROJECTS_SUCCESS, payload: projects});
export const fetchProjectsActionError = (error: any) => ({type: actionTypes.FETCH_PROJECTS_ERROR, payload: error});

export const fetchProjectAction = (projectId: number) => ({type: actionTypes.FETCH_PROJECT, payload: projectId});
export const fetchProjectActionError =(error: any) => ({type: actionTypes.FETCH_PROJECT_ERROR, payload: error});

export const deleteProjectAction = (projectId: number) => ({type: actionTypes.DELETE_PROJECT, payload: projectId});
export const deleteProjectActionError = (error: any) => ({type: actionTypes.DELETE_PROJECT_ERROR, payload: error});

export const createProjectAction = (project: IProject) => ({type: actionTypes.CREATE_PROJECT, payload: project});
export const createProjectActionError = (error: any) => ({type: actionTypes.CREATE_PROJECT_ERROR, payload: error});

export const updateProjectAction = (project: IProject) => ({type: actionTypes.UPDATE_PROJECT, payload: project});
export const updateProjectActionError = (error: any) => ({type: actionTypes.UPDATE_PROJECT_ERROR, payload: error});

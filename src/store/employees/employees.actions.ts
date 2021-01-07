import * as actionTypes from "./employees.action-types";
import {IEmployee} from "../../model/common/IEmployee";

export const fetchEmployeesAction = () => ({type: actionTypes.FETCH_EMPLOYEES, payload: undefined});

export const fetchEmployeesSuccessAction = (employees: IEmployee[]) => ({type: actionTypes.FETCH_EMPLOYEES_SUCCESS, payload: employees});

export const fetchEmployeesErrorAction = (error: any) => ({type: actionTypes.FETCH_EMPLOYEES_ERROR, payload: error});

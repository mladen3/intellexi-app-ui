import * as actionTypes from "./employees.action-types";
import {IEmployee} from "../../model/common/IEmployee";

export const fetchEmployeesAction = () => ({type: actionTypes.FETCH_EMPLOYEES, payload: undefined});

export const fetchEmployeesSuccessAction = (employees: IEmployee[]) => ({type: actionTypes.FETCH_EMPLOYEES_SUCCESS, payload: employees});

export const fetchEmployeesErrorAction = (error: any) => ({type: actionTypes.FETCH_EMPLOYEES_ERROR, payload: error});

export const deleteEmployeesAction = (employee: IEmployee) => ({type: actionTypes.DELETE_EMPLOYEE, payload: employee});

export const deleteEmployeeErrorAction = (error: any) => ({type: actionTypes.DELETE_EMPLOYEE_ERROR, payload: error});

export const createEmployeeAction = (employee: IEmployee) => ({type: actionTypes.CREATE_EMPLOYEE, payload: employee});

export const createEmployeeErrorAction = (error: any) => ({type: actionTypes.CREATE_EMPLOYEE_ERROR, payload: error});

export const updateEmployeeAction  = (employee: IEmployee) => ({type: actionTypes.UPDATE_EMPLOYEE, payload: employee});

export const updateEmployeeErrorAction = (error: any) => ({type: actionTypes.UPDATE_EMPLOYEE_ERROR, payload: error});

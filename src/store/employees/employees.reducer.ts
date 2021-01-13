import {IEmployee} from "../../model/common/IEmployee";
import {IAction} from "app-store";
import * as actionTypes from "./employees.action-types";

export interface IEmployeesState {
  data: IEmployee[] | undefined;
  error: any;
  loading: boolean;
}

const initialState: IEmployeesState = {
  data: undefined,
  error: undefined,
  loading: false
}

export const employeesReducer = (state: IEmployeesState = initialState, action: IAction<any>) => {
  switch (action.type) {
    case actionTypes.FETCH_EMPLOYEES:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    case actionTypes.FETCH_EMPLOYEES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case actionTypes.DELETE_EMPLOYEE:
      return {
        ...state,
        loading: true
      }
    case actionTypes.DELETE_EMPLOYEE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case actionTypes.CREATE_EMPLOYEE:
      return {
        ...state,
        loading: true
      }
    case actionTypes.CREATE_EMPLOYEE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

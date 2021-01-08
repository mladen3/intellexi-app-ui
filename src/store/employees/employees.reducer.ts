import {IEmployee} from "../../model/common/IEmployee";
import {EmployeesHelper} from "../../tools/employees-helper";
import {IAction} from "app-store";
import * as actionTypes from "./employees.action-types";

export interface IEmployeesState {
  data: IEmployee[];
  error: any;
  loading: boolean;
}

const initialState: IEmployeesState = {
  data: EmployeesHelper.getMockedEmployees(),
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
    default:
      return state;
  }
}

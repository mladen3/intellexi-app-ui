import {call, put, takeLatest} from "redux-saga/effects";
import * as actionTypes from "./employees.action-types";
import * as actions from "./employees.actions";
import * as service from "./employees.service";
import {IEmployee} from "../../model/common/IEmployee";
import {IAction} from "app-store";

export function* fetchEmployeesSaga() {
  try {
    const employees: IEmployee[] = yield call(service.fetchEmployees);
    yield put(actions.fetchEmployeesSuccessAction(employees));
  } catch (error) {
    yield put(actions.fetchEmployeesErrorAction(error));
  }
}

export function* deleteEmployeeSaga(action: IAction<any>) {
  try {
    yield call(service.deleteEmployee, action.payload);
    yield put(actions.fetchEmployeesAction());
  } catch (error) {
    yield put(actions.deleteEmployeeErrorAction(error));
  }
}

export function* createEmployeeSaga(action: IAction<any>) {
  try {
    yield call(service.createEmployee, action.payload);
    yield put(actions.fetchEmployeesAction());
  } catch (error) {
    yield put(actions.createEmployeeErrorAction(error));
  }
}

export function* watchEmployeesSaga() {
  yield takeLatest(actionTypes.FETCH_EMPLOYEES, fetchEmployeesSaga);
  yield takeLatest(actionTypes.DELETE_EMPLOYEE, deleteEmployeeSaga);
  yield takeLatest(actionTypes.CREATE_EMPLOYEE, createEmployeeSaga);
}

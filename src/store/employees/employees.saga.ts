import {call, put, takeLatest, race, take } from "redux-saga/effects";
import * as actionTypes from "./employees.action-types";
import * as actions from "./employees.actions";
import * as service from "./employees.service";
import {IEmployee} from "../../model/common/IEmployee";
import {IAction} from "app-store";
import {openConfirmModalAction} from "../confirmModal/confirm.actions";
import * as confirmActionTypes from "../confirmModal/confirm.action-types";
import {IAuth} from "../../model/common/IAuth";

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
    // check if user wants to delete employee
    const employee: IEmployee = action.payload;
    yield put(openConfirmModalAction("Are you sure you want to delete " + employee.firstName + " " + employee.lastName));

    const { confirm } = yield race({
      confirm: take(confirmActionTypes.CONFIRM),
      cancel: take(confirmActionTypes.CANCEL)
    })

    // after user confirmed
    if (confirm) {
      yield call(service.deleteEmployee, employee.id);
      yield put(actions.fetchEmployeesAction());
    }
  } catch (error) {
    yield put(actions.deleteEmployeeErrorAction(error));
  }
}

export function* createEmployeeSaga(action: IAction<any>) {
  try {
    const auth: IAuth = yield call(service.createEmployee, action.payload);

    yield put(openConfirmModalAction("credentials of user are: username " + auth.username + ", password " + auth.password, true));

    const confirm = yield take(confirmActionTypes.CONFIRM);

    if (confirm) {
      yield put(actions.fetchEmployeesAction());
    }
  } catch (error) {
    yield put(actions.createEmployeeErrorAction(error));
  }
}

export function* updateEmployeeSaga(action: IAction<any>) {
  try {
    yield call(service.updateEmployee, action.payload);
    yield put(actions.fetchEmployeesAction());
  } catch (error) {
    yield put(actions.updateEmployeeErrorAction(error));
  }
}

export function* watchEmployeesSaga() {
  yield takeLatest(actionTypes.FETCH_EMPLOYEES, fetchEmployeesSaga);
  yield takeLatest(actionTypes.DELETE_EMPLOYEE, deleteEmployeeSaga);
  yield takeLatest(actionTypes.CREATE_EMPLOYEE, createEmployeeSaga);
  yield takeLatest(actionTypes.UPDATE_EMPLOYEE, updateEmployeeSaga);
}

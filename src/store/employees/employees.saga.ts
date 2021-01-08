import {call, put, takeLatest} from "redux-saga/effects";
import * as actionTypes from "./employees.action-types";
import * as actions from "./employees.actions";
import * as service from "./employees.service";
import {IEmployee} from "../../model/common/IEmployee";

export function* fetchEmployeesSaga() {
  try {
    const employees: IEmployee[] = yield call(service.fetchEmployees);
    yield put(actions.fetchEmployeesSuccessAction(employees));
  } catch (error) {
    yield put(actions.fetchEmployeesErrorAction(error));
  }
}

export function* watchEmployeesSaga() {
  yield takeLatest(actionTypes.FETCH_EMPLOYEES, fetchEmployeesSaga);
}

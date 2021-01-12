import {call, put, takeLatest} from "redux-saga/effects";
import * as actionTypes from "./auth.action-types";
import * as actions from "./auth.actions";
import * as service from "./auth.service";
import {IAction} from "app-store";
import history from '../../history';
import {ROUTE} from "../../routing/Routes";

export function* loginUserSaga(action: IAction<any>) {
  try {
    const jwt = yield call(service.signIn, action.payload);
    sessionStorage.setItem("jwt", jwt);
    yield put(actions.loginUserSuccessAction());
  } catch (error) {
    yield put(actions.loginUserErrorAction(error));
  }
}

export function goToTimesheetPage() {
  history.push(ROUTE.timesheet);
}

export function* watchAuthSaga() {
  yield takeLatest(actionTypes.LOGIN_USER, loginUserSaga);
  yield takeLatest(actionTypes.LOGIN_USER_SUCCESS, goToTimesheetPage)
}

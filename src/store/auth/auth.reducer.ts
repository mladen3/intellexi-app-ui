import {IAction} from "app-store";
import * as actionTypes from "./auth.action-types";

export interface IAuthState {
  isAuthentificated: boolean;
  error: any;
  loading: boolean;
}

const initialState: IAuthState = {
  isAuthentificated: false,
  error: undefined,
  loading: false
}

export const authReducer = (state: IAuthState = initialState, action: IAction<any>) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: undefined
      }
    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthentificated: true,
        loading: false,
        error: undefined
      }
    case actionTypes.LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        isAuthentificated: true,
        error: action.payload
      }
    default:
      return state;
  }
}

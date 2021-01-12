import * as actionTypes from "./auth.action-types";
import {IAuth} from "../../model/common/IAuth";

export const loginUserAction = (auth: IAuth) => ({type: actionTypes.LOGIN_USER, payload: auth});

export const loginUserSuccessAction = () => ({type: actionTypes.LOGIN_USER_SUCCESS, payload: undefined});

export const loginUserErrorAction = (error: any) => ({type: actionTypes.LOGIN_USER_ERROR, payload: error});

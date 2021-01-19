import {IAction} from "app-store";
import * as actionTypes from "./confirm.action-types";

export interface IConfirmModalState {
  modalOpened: boolean;
  message: string;
}

const initialState: IConfirmModalState = {
  modalOpened: false,
  message: ""
}

export const confirmReducer = (state: IConfirmModalState = initialState, action: IAction<any>) => {
  switch (action.type) {
    case actionTypes.OPEN_CONFIRM_MODAL:
      return {
        ...state,
        modalOpened: true,
        message: action.payload
      }
    case actionTypes.CONFIRM:
      return {
        ...state,
        modalOpened: false,
        message: ""
      }
    case actionTypes.CANCEL:
      return {
        ...state,
        modalOpened: false,
        message: ""
      }
    default:
      return state;
  }
}

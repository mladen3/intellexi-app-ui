import {IAction} from "app-store";
import * as actionTypes from "./confirm.action-types";

export interface IConfirmModalState {
  modalOpened: boolean;
  message: string;
  cancelNotActive: boolean | undefined;
}

const initialState: IConfirmModalState = {
  modalOpened: false,
  message: "",
  cancelNotActive: false
}

export const confirmReducer = (state: IConfirmModalState = initialState, action: IAction<any>) => {
  switch (action.type) {
    case actionTypes.OPEN_CONFIRM_MODAL:
      return {
        ...state,
        modalOpened: true,
        message: action.payload.message,
        cancelNotActive: action.payload.cancelNotActive
      }
    case actionTypes.CONFIRM:
      return {
        ...state,
        modalOpened: false,
        message: "",
        cancelNotActive: false
      }
    case actionTypes.CANCEL:
      return {
        ...state,
        modalOpened: false,
        message: "",
        cancelNotActive: false
      }
    default:
      return state;
  }
}

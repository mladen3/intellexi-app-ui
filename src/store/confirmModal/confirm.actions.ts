import * as actionTypes from "./confirm.action-types";

export const openConfirmModalAction = (message: string, cancelNotActive?: boolean) => ({type: actionTypes.OPEN_CONFIRM_MODAL, payload: {message: message, cancelNotActive: cancelNotActive}});

export const confirmAction = () => ({type: actionTypes.CONFIRM, payload: undefined});

export const cancelAction = () => ({type: actionTypes.CANCEL, payload: undefined});

import {IEmployeesState} from "./employees/employees.reducer";
import {IAuthState} from "./auth/auth.reducer";
import {IConfirmModalState} from "./confirmModal/confirm.reducer";

export interface IAppState {
  auth: IAuthState;
  employees: IEmployeesState;
  confirmModal: IConfirmModalState;
}

import {IEmployeesState} from "./employees/employees.reducer";
import {IAuthState} from "./auth/auth.reducer";

export interface IAppState {
  auth: IAuthState;
  employees: IEmployeesState;

}

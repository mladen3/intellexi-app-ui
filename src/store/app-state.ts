import {IEmployeesState} from "./employees/employees.reducer";

export interface IAppState {
  isAuthenticated: boolean;
  employees: IEmployeesState;

}

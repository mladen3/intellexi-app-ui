import {IEmployeesState} from "./employees/employees.reducer";
import {IAuthState} from "./auth/auth.reducer";
import {IEventsState} from "./events/events.reducer";
import {IConfirmModalState} from "./confirmModal/confirm.reducer";
import {IProjectsState} from "./projects/projects.reducer";

export interface IAppState {
  auth: IAuthState;
  employees: IEmployeesState;
  events: IEventsState;
  projects: IProjectsState;

  confirmModal: IConfirmModalState;
}

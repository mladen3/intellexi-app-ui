import {employeesReducer} from "./employees/employees.reducer";
import {authReducer} from "./auth/auth.reducer";
import {eventsReducer} from "./events/events.reducer";
import {confirmReducer} from "./confirmModal/confirm.reducer";
import {projectsReducer} from "./projects/projects.reducer";

export const reducers = {
  employees: employeesReducer,
  auth: authReducer,
  events: eventsReducer,
  confirmModal: confirmReducer,
  projects: projectsReducer
};

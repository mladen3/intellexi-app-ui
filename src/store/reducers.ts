import {employeesReducer} from "./employees/employees.reducer";
import {authReducer} from "./auth/auth.reducer";

export const reducers = {
  employees: employeesReducer,
  auth: authReducer
};

import {EmployeeType} from "./enum/EmployeeType";

export interface IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  firstDayInCompany: Date;
  yearsOfExperience: string;
  managingProject: boolean;
  managedBy: number;
  employeeType: EmployeeType;

}

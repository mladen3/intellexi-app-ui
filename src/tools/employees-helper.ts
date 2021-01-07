import {IEmployee} from "../model/common/IEmployee";

const employees = [
  {
    id: 1,
    firstName: 'Ivan',
    lastName: 'Ivić',
    dob: '15.3.1991.',
    firstDayInCompany: '12.6.2019.',
    yearsOfExperience: '4y5m',
    managedBy: 'Petar Perić',
    employeeType: 'Kum od šefa'
  },
  {
    id: 2,
    firstName: 'Petar',
    lastName: 'Perić',
    dob: '27.8.1989.',
    firstDayInCompany: '5.6.2020.',
    yearsOfExperience: '6y2m',
    managedBy: 'Luka Lukić',
    employeeType: 'Bratić'
  },
  {
    id: 3,
    firstName: 'Luka',
    lastName: 'Lukić',
    dob: '3.4.1980.',
    firstDayInCompany: '8.9.2010.',
    yearsOfExperience: '15y',
    managedBy: 'Nema takvoga',
    employeeType: 'El Patron'
  }
];

export class EmployeesHelper {

  public static getMockedEmployees(): IEmployee[] {
    return employees;
  }
}

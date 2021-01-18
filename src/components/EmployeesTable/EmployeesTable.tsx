import React from "react";
// import {makeStyles} from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import {DataGrid, ColDef, RowModel, CellParams} from '@material-ui/data-grid';
import VisibilityIcon from '@material-ui/icons/Visibility';

import {IEmployee} from "../../model/common/IEmployee";

interface IProps{
  employees: IEmployee[] | undefined;
  deleteEmployee: (employee: IEmployee) => void;
  openViewEmployeeModal: (employee: IEmployee) => void;
}

export const EmployeesTable = (props: IProps) => {

  const columns: ColDef[] = [
    {field: "firstName", headerName: "Name", width: 300},
    {field: "lastName", headerName: "Surname", width: 300},
    {field: "employeeType", headerName: "Employee type", width: 300},
    {field: "yearsOfExperience", headerName: "Years of experience", width: 300},
    {
      field: "view",
      headerName: "View employee",
      sortable: false,
      width: 200,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        return <VisibilityIcon onClick={() => props.openViewEmployeeModal(params.value as IEmployee)}/>;
      }
    },
    {
      field: "delete",
      headerName: "Delete employee",
      sortable: false,
      width: 200,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        return <DeleteIcon onClick={() => props.deleteEmployee(params.value as IEmployee)}/>;
      }
    },
  ];

  const rows =
    props.employees?.map((employee: IEmployee) => { return(
    {id: employee.id, firstName: employee.firstName, lastName: employee.lastName, employeeType: employee.employeeType, yearsOfExperience: employee.yearsOfExperience, view: employee, delete: employee} as RowModel
  );}) ?? [] as RowModel[];

  return(
      <div>
        <div style={{ height: 630, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection={false} />
        </div>
      </div>
  )
}

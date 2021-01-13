import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

import {IEmployee} from "../../model/common/IEmployee";

interface IProps{
  employees: IEmployee[] | undefined;
  deleteEmployee: (id: number) => void;
}

const useStyles = makeStyles({
  table: {
    minWidth: 1000,
  },
});

export const EmployeesTable = (props: IProps) => {
  const classes = useStyles();
  return(
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Surname</TableCell>
                <TableCell align="left">Employee type</TableCell>
                <TableCell align="left">Years of experience</TableCell>
                <TableCell align="right">Delete employee</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.employees?.map((employee: IEmployee) => (
                  <TableRow key={employee.id}>
                    <TableCell component="th" scope="row" align="left">
                      {employee.firstName}
                    </TableCell>
                    <TableCell align="left">
                      {employee.lastName}
                    </TableCell>
                    <TableCell align="left">
                      {employee.employeeType}
                    </TableCell>
                    <TableCell align="left">
                      {employee.yearsOfExperience}
                    </TableCell>
                    <TableCell align="right">
                      <DeleteIcon onClick={() => props.deleteEmployee(employee.id)}/>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  )
}

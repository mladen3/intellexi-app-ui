import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {IEmployee} from "../../model/common/IEmployee";
import {FormControl, InputLabel, Select} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {EmployeeType} from "../../model/common/enum/EmployeeType";
import DatePicker from "../DatePicker/DatePicker";
import moment from "moment";

interface IProps {
  open: boolean;
  onClose: () => void;
  createEmployee: (employee: IEmployee) => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    }),
);

export default function CreateUserFormDialog(props: IProps) {

  const classes = useStyles();

  const employee: IEmployee = {} as IEmployee;

  const setDate = (date: Date) => {
    employee.dateOfBirth = date;
  }

  const createEmployeeWithCurrentDate = () => {
    employee.firstDayInCompany = moment().toDate();
    props.createEmployee(employee);
  }

  return (
      <div>
        <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Create employee</DialogTitle>
          <DialogContent>
            <div className="TextField First name">
              <TextField id="outlined-basic" label="First name" size="small"
                         variant="outlined" onChange={(e) => employee.firstName = e.target.value}/>
            </div>
            <div className="TextField Last name">
              <TextField id="outlined-basic" label="Last name" size="small"
                         variant="outlined" onChange={(e) => employee.lastName = e.target.value}/>
            </div>
            <div className="TextField Last name">
              <TextField id="outlined-basic" label="Last name" size="small"
                         variant="outlined" onChange={(e) => employee.yearsOfExperience = e.target.value}/>
            </div>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Employee type</InputLabel>
              <Select
                  native
                  onChange={(e) => employee.employeeType = e.target.value as EmployeeType}
                  inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                  }}
              >
                <option aria-label="None" value="" />
                <option value={0}>FULLTIME</option>
                <option value={1}>PARTTIME</option>
                <option value={2}>OUTSOURCE</option>
                <option value={3}>STUDENT</option>
              </Select>
            </FormControl>

            <DatePicker setDate={setDate}/>

          </DialogContent>
          <DialogActions>
            <Button onClick={props.onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={createEmployeeWithCurrentDate} color="primary">
              Create employee
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  );

}

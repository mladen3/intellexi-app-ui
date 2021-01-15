import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import {IEmployee} from "../../model/common/IEmployee";
import {DialogActions, FormControl, InputLabel, Select} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {EmployeeType} from "../../model/common/enum/EmployeeType";
import DatePicker from "../DatePicker/DatePicker";
import DialogContent from "@material-ui/core/DialogContent";
import * as _ from "lodash";

interface IProps {
  open: boolean;
  onClose: () => void;
  updateEmployee: (employee: IEmployee) => void;
  employee: IEmployee;
}

export default class CreateEmployeeFormDialog extends Component<IProps> {

  render () {
    const employee = _.cloneDeep(this.props.employee);

    const setDate = (date: Date) => {
      employee.dateOfBirth = date;
    }

    return (
        <div>
          <Dialog open={this.props.open} onClose={this.props.onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">View employee</DialogTitle>
            <DialogContent>
              <div className="TextField First name">
                <TextField id="outlined-basic" label="First name" size="small" defaultValue={employee.firstName}
                           variant="outlined" onChange={(e) => employee.firstName = e.target.value}/>
              </div>
              <div className="TextField Last name">
                <TextField id="outlined-basic" label="Last name" size="small" defaultValue={employee.lastName}
                           variant="outlined" onChange={(e) => employee.lastName = e.target.value}/>
              </div>
              <div className="TextField Last name">
                <TextField id="outlined-basic" label="Years of experience" size="small" defaultValue={employee.yearsOfExperience}
                           variant="outlined" onChange={(e) => employee.yearsOfExperience = e.target.value}/>
              </div>
              <FormControl className="formControl">
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

              <DatePicker date={employee.dateOfBirth} setDate={setDate}/>

            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.onClose} color="primary">
                Cancel
              </Button>
              <Button onClick={() => this.props.updateEmployee(employee)} color="primary">
                Update employee
              </Button>
            </DialogActions>
          </Dialog>
        </div>
    );
  }

}

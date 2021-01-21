import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import {IEmployee} from "../../model/common/IEmployee";
import {DialogActions, FormControl, FormHelperText, InputLabel, Select} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {EmployeeType} from "../../model/common/enum/EmployeeType";
import DatePicker from "../DatePicker/DatePicker";
import DialogContent from "@material-ui/core/DialogContent";
import {employeeSchema} from "../../tools/YupValidation";
import * as _ from "lodash";

interface IProps {
  open: boolean;
  onClose: () => void;
  updateEmployee: (employee: IEmployee) => void;
  employee: IEmployee;
}

export default class ViewEmployeeFormDialog extends Component<IProps> {

  state = {
    path: "",
    message: "",
    employee: {} as IEmployee
  };

  componentDidUpdate(prevProps: Readonly<IProps>) {
    if (prevProps.employee !== this.props.employee) {
      this.setState({employee: this.props.employee});
    }
  }

  render () {
    const handleChange = (event: any) => {
      const { target: { name, value } } = event;
      this.setState({employee: _.set(this.state.employee, name, value)});
    }

    const setDateOfBirth = (date: Date) => {
      this.setState({employee: _.set(this.state.employee, 'dateOfBirth', date)});
    }

    const updateEmployee = () => {
      const { employee } = this.state;
      employeeSchema.validate(employee).then((value) => {
        this.props.updateEmployee(employee);
        this.setState({path: "", message: "", employee: {} as IEmployee});
      }).catch((err) => {
        this.setState({path: err.path, message: err.message.split(",")[0].split(".")[0]});
      });
    }

    const onClose = () => {
      this.setState({path: "", message: "", employee: {} as IEmployee});
      this.props.onClose();
    }

    return (
        <div>
          <Dialog open={this.props.open} onClose={this.props.onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">View employee</DialogTitle>
            <DialogContent>
              <div className="TextField First name">
                <TextField id="outlined-basic" name="firstName" label="First name" size="small" value={this.state.employee.firstName}
                           variant="outlined" onChange={handleChange} error={this.state.path === "firstName"}
                           helperText={this.state.path === "firstName" ? this.state.message : ""}/>
              </div>
              <div className="TextField Last name">
                <TextField id="outlined-basic" name="lastName" label="Last name" size="small" value={this.state.employee.lastName}
                           variant="outlined" onChange={handleChange} error={this.state.path === "lastName"}
                           helperText={this.state.path === "lastName" ? this.state.message : ""}/>
              </div>
              <div className="TextField Last name">
                <TextField id="outlined-basic" name="yearsOfExperience" label="Years of experience" size="small"
                           value={this.state.employee.yearsOfExperience}
                           variant="outlined" onChange={handleChange} error={this.state.path === "yearsOfExperience"}
                           helperText={this.state.path === "yearsOfExperience" ? this.state.message : ""}/>
              </div>
              <FormControl className="formControl">
                <InputLabel htmlFor="age-native-simple">Employee type</InputLabel>
                <Select
                    native
                    name="employeeType"
                    value={this.state.employee.employeeType}
                    error={this.state.path === "employeeType"}
                    onChange={(e) => this.setState({employee: _.set(this.state.employee, 'employeeType', e.target.value)})}
                >
                  <option aria-label="None" value=""/>
                  <option value={0 as EmployeeType}>FULLTIME</option>
                  <option value={1 as EmployeeType}>PARTTIME</option>
                  <option value={2 as EmployeeType}>OUTSOURCE</option>
                  <option value={3 as EmployeeType}>STUDENT</option>
                </Select>
                <FormHelperText>
                  {this.state.path === "employeeType" ? this.state.message : ""}
                </FormHelperText>
              </FormControl>

              <DatePicker date={this.state.employee.dateOfBirth} setDate={setDateOfBirth} path={this.state.path}
                          message={this.state.message}/>

            </DialogContent>
            <DialogActions>
              <Button onClick={onClose} color="primary">
                Cancel
              </Button>
              <Button onClick={updateEmployee} color="primary">
                Update employee
              </Button>
            </DialogActions>
          </Dialog>
        </div>
    );
  }

}

import * as React from "react";
import {Component} from "react";

import {Fab, Tooltip, Divider, Grid} from "@material-ui/core";
import "./employee.css";


import {Cancel, Edit, Save} from "@material-ui/icons";
import ProfilePic from "../../components/ProfilePic/ProfilePic";
import EmployeeInfo from "../../components/EmployeeInfo/EmployeeInfo";
import EmployeeEdit from "../../components/EmployeeEdit/EmployeeEdit";

class Employee extends Component<any, any> {

    state = {
        isEditing: false,
        employee: {
            id: 1,
            firstName: 'Ivan',
            lastName: 'Ivić',
            dob: '15.3.1991.',
            firstDayInCompany: '12.6.2019.',
            yearsOfExperience: '4y5m',
            managedBy: 'Petar Perić',
            employeeType: 'Software Developer',
            email: 'ivan.ivic@gmail.com',
            phone: '0956668843',
            address: 'Ulica Nekog Umjetnika 5',
            skillSet: 'Front (React, Angular), Back(Java)'
        }
    }

    onNameChangeHandler = (event: any) => {
        const employee = {...this.state.employee};
        employee.firstName = event.target.value;
        this.setState({employee: employee});
    }

    onEditHandler = () => {
        this.setState({isEditing: !this.state.isEditing});
    }

    onSaveHandler = () => {
        alert("Saved");
    }

    render() {

        return (
            <div className="Employee">
                <Grid container direction="row" alignItems="center">
                    <Grid item style={{marginRight: "32px"}}>
                        <ProfilePic firstName={this.state.employee.firstName} lastName={this.state.employee.lastName}/>
                    </Grid>
                    {!this.state.isEditing ? (<Grid item style={{fontSize: "24px"}}>
                        <p>{this.state.employee.firstName + " " + this.state.employee.lastName}</p>

                        <p className="EmployeeType">{this.state.employee.employeeType}</p>
                    </Grid>) : null}
                </Grid>

                <Divider variant="middle" style={{margin: "32px 0px"}}/>

                {!this.state.isEditing ? <EmployeeInfo employee={this.state.employee}/> :
                    <EmployeeEdit employee={this.state.employee} nameChanged={this.onNameChangeHandler}/>}

                <Divider variant="middle" style={{margin: "32px 0px"}}/>

                {this.state.isEditing ?
                    (
                        <div>
                            <Tooltip title="Save" aria-label="save">
                                <Fab style={{marginRight: "8px"}} color="primary" aria-label="save"
                                     onClick={this.onSaveHandler}>
                                    <Save/>
                                </Fab>
                            </Tooltip>
                            <Tooltip title="Cancel" aria-label="save">
                                <Fab color="primary" aria-label="cancel" onClick={this.onEditHandler}>
                                    <Cancel/>
                                </Fab>
                            </Tooltip>
                        </div>)
                    : (<Tooltip title="Edit" aria-label="edit">
                        <Fab color="primary" aria-label="edit" onClick={this.onEditHandler}>
                            <Edit/>
                        </Fab>
                    </Tooltip>)}
            </div>
        );
    }
}

export default Employee;

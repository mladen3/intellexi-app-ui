import * as React from "react";
import {Component} from "react";

import {Fab, Tooltip, Divider} from "@material-ui/core";
import {Cancel, Edit, Save} from "@material-ui/icons";
import "./Employee.css";

import EmployeeInfo from "../../components/EmployeeInfo/EmployeeInfo";
import EmployeeEdit from "../../components/EmployeeEdit/EmployeeEdit";
import CustomSlide from "../../components/SlideTransitions/CustomSlide/CustomSlide";
import EmployeeTitle from "../../components/EmployeeHeader/EmployeeTitle";

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

                <EmployeeTitle isEditing={this.state.isEditing} employee={this.state.employee}/>

                <Divider variant="middle" style={{margin: "32px 0px"}}/>

                <CustomSlide direction="left" in={!this.state.isEditing}><EmployeeInfo isEditing={this.state.isEditing}
                                                                          employee={this.state.employee}/></CustomSlide>

                <CustomSlide direction="right" in={this.state.isEditing}><EmployeeEdit isEditing={this.state.isEditing} employee={this.state.employee}
                                          nameChanged={this.onNameChangeHandler}/></CustomSlide>

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

import * as React from "react";
import {Component} from "react";

import {Fab, TextField, Tooltip} from "@material-ui/core";
import {Cancel, Edit, Save} from "@material-ui/icons";

import ProfilePic from "../../components/ProfilePic/ProfilePic";

class Employee extends Component<any, any> {

    state = {
        isEditing: false,
        id: 1,
        firstName: 'Ivan',
        lastName: 'Ivić',
        dob: '15.3.1991.',
        firstDayInCompany: '12.6.2019.',
        yearsOfExperience: '4y5m',
        managedBy: 'Petar Perić',
        employeeType: 'Kum od šefa'
    }

    onChangeHandler = (event: any) => {
        this.setState({firstName: event.target.value});
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
                <div className="Avatar">
                    <ProfilePic/>
                </div>

                {/* All this below will be one component (when we get back response from service)*/}
                <div>
                    <div className="TextField Name">
                        <TextField id="outlined-basic" label="First Name" value={this.state.firstName}
                                   variant="outlined" onChange={this.onChangeHandler}
                                   InputProps={{
                                       disabled: !this.state.isEditing,
                                   }}/>
                    </div>
                    <div className="TextField Name">
                        <TextField id="outlined-basic" label="Last Name" value={this.state.lastName} variant="outlined"
                                   InputProps={{
                                       disabled: !this.state.isEditing,
                                   }}/>
                    </div>
                </div>
                <div>
                    <div className="TextField">
                        <TextField id="outlined-basic" label="DOB" value={this.state.dob} variant="outlined"
                                   InputProps={{
                                       disabled: !this.state.isEditing,
                                   }}/>
                    </div>
                    <div className="TextField">
                        <TextField id="outlined-basic" label="In company from" value={this.state.firstDayInCompany}
                                   variant="outlined" InputProps={{
                            disabled: !this.state.isEditing,
                        }}/>
                    </div>
                    <div className="TextField">
                        <TextField id="outlined-basic" label="First superior" value={this.state.managedBy}
                                   variant="outlined" InputProps={{
                            disabled: !this.state.isEditing,
                        }}/>
                    </div>
                    <div className="TextField">
                        <TextField id="outlined-basic" label="Years of experience" value={this.state.yearsOfExperience}
                                   variant="outlined" InputProps={{
                            disabled: !this.state.isEditing,
                        }}/>
                    </div>
                    <div className="TextField">
                        <TextField id="outlined-basic" label="Employee type" value={this.state.employeeType}
                                   variant="outlined" InputProps={{
                            disabled: !this.state.isEditing,
                        }}/>
                    </div>
                </div>

                {this.state.isEditing ?
                    (
                        <div>
                            <Tooltip title="Save" aria-label="save">
                                <Fab style={{marginRight: "8px"}} color="primary" aria-label="save" onClick={this.onSaveHandler}>
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

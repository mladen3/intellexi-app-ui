import * as React from "react";
import {Component} from "react";

import {Fab, TextField} from '@material-ui/core';
import {Edit} from '@material-ui/icons';
import './Employee.css';

import ProfilePic from '../../components/ProfilePic/ProfilePic';

class Employee extends Component<any, any> {

    render() {
        return (
            <div>

                <div>
                    <div className="Employee">
                        <div style={{marginLeft: '16px'}}>
                            <ProfilePic/>
                        </div>
                        <div>
                            <div className="TextField Name">
                                <TextField id="outlined-basic" label="First Name" value="Ivan" variant="outlined"/>
                            </div>
                            <div className="TextField Name">
                                <TextField id="outlined-basic" label="Last Name" value="Ivić" variant="outlined"/>
                            </div>
                        </div>
                        <div>
                            <div className="TextField">
                                <TextField id="outlined-basic" label="DOB" value="15.8.1990" variant="outlined"/>
                            </div>
                            <div className="TextField">
                                <TextField id="outlined-basic" label="In company from" value="13.3.2019."
                                           variant="outlined"/>
                            </div>
                            <div className="TextField">
                                <TextField id="outlined-basic" label="First superior" value="Petar Perić"
                                           variant="outlined"/>
                            </div>
                        </div>

                        <Fab color="primary" aria-label="edit">
                            <Edit/>
                        </Fab>
                    </div>

                </div>


            </div>
        );
    }
}

export default Employee;

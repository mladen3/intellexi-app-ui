import * as React from "react";
import {Divider, TextField} from "@material-ui/core";

const EmployeeEdit = (props: any) => {
    return (
            <div>
                <div className="TextField Name">
                    <TextField label="First Name" value={props.employee.firstName}
                               variant="outlined"
                               onChange={props.nameChanged}/>
                </div>
                <div className="TextField Name">
                    <TextField id="outlined-basic" label="Last Name" value={props.employee.lastName}
                               variant="outlined"/>
                </div>

                <div className="TextField">
                    <TextField id="outlined-basic" label="Email" value={props.employee.email}
                               variant="outlined"/>
                </div>
                <div className="TextField">
                    <TextField id="outlined-basic" label="Contact Phone" value={props.employee.phone}
                               variant="outlined"/>
                </div>

                <Divider variant="middle" style={{margin: "16px 0px"}}/>

                <div>
                    <div className="TextField">
                        <TextField id="outlined-basic" label="DOB" value={props.employee.dob}
                                   variant="outlined"/>
                    </div>
                    <div className="TextField">
                        <TextField id="outlined-basic" label="In company from"
                                   value={props.employee.firstDayInCompany}
                                   variant="outlined"
                        />
                    </div>
                    <div className="TextField">
                        <TextField id="outlined-basic" label="First superior" value={props.employee.managedBy}
                                   variant="outlined"/>
                    </div>
                    <div className="TextField">
                        <TextField id="outlined-basic" label="Years of experience"
                                   value={props.employee.yearsOfExperience}
                                   variant="outlined"/>
                    </div>
                    <div className="TextField">
                        <TextField id="outlined-basic" label="Employee type" value={props.employee.employeeType}
                                   variant="outlined"/>
                    </div>
                </div>
            </div>
    )
}

export default EmployeeEdit;

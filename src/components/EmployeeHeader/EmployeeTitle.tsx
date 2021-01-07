import * as React from "react";
import {Grid} from "@material-ui/core";
import ProfilePic from "../ProfilePic/ProfilePic";
import CustomSlide from "../SlideTransitions/CustomSlide/CustomSlide";

const EmployeeTitle = (props: any) => {
    return (
        <Grid container direction="row" alignItems="center">
            <Grid item style={{marginRight: "32px"}}>
                <ProfilePic firstName={props.employee.firstName} lastName={props.employee.lastName}/>
            </Grid>
            {!props.isEditing ? (
                <CustomSlide direction="left" in={!props.isEditing}>
                    <Grid item style={{fontSize: "24px"}}>
                        <p>{props.employee.firstName + " " + props.employee.lastName}</p>
                        <p className="EmployeeType">{props.employee.employeeType}</p>
                    </Grid>
                </CustomSlide>

            ) : null}
        </Grid>
    )
}

export default EmployeeTitle;

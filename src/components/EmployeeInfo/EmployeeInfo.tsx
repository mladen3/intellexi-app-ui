import * as React from "react";

import {EmailOutlined, HomeOutlined, Phone} from "@material-ui/icons";
import {Divider} from "@material-ui/core";

import InfoLabel from "../InfoLabel/InfoLabel";
import ContactLabel from "../ContactLabel/ContactLabel";

const EmployeeInfo = (props: any) => {
    return (
        <div>
            <ContactLabel icon={<EmailOutlined style={{fontSize: "14px"}}/>} value={props.employee.email}/>

            <ContactLabel icon={<Phone style={{fontSize: "14px"}}/>} value={props.employee.phone}/>

            <ContactLabel icon={<HomeOutlined style={{fontSize: "14px"}}/>} value={props.employee.address}/>

            <Divider variant="middle" style={{margin: "16px 0px"}}/>

            <InfoLabel label={"Date of birth"} value={props.employee.dob}/>

            <InfoLabel label={"Started working in company"} value={props.employee.firstDayInCompany}/>

            <InfoLabel label={"First superior"} value={props.employee.managedBy}/>

            <InfoLabel label={"Total Work Experience"} value={props.employee.yearsOfExperience}/>

            <Divider variant="middle" style={{margin: "16px 0px"}}/>

            <InfoLabel label={"Skill set"} value={props.employee.skillSet}/>

        </div>
    )
}

export default EmployeeInfo;

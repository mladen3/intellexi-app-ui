import * as React from "react";
import {useFormik} from 'formik';
import {Divider, TextField} from "@material-ui/core";

import * as yup from 'yup';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

const validationSchema = yup.object({
    firstName: yup
        .string()
        .max(30, "Field too long")
        .required('First name is required'),
    lastName: yup
        .string()
        .max(30, "Field too long")
        .required('Password is required'),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    address: yup
        .string()
        .max(60, "Field too long"),
    phone: yup
        .string()
        .required('Phone is required')
        .max(15, 'Phone is too long'),
    dob: yup
        .date()
        .required('Date of birth is required'),
    firstDayInCompany: yup
        .date()
        .required('First day in company is required'),
    yearsOfExperience: yup
        .string()
        .max(20, "Field too long")
        .required('Years of experience is required'),
    managedBy: yup
        .string()
        .max(50, "Field too long")
        .required('Managed by is required'),
    employeeType: yup
        .string()
        .max(30, "Field too long")
        .required('Employee type is required'),
    skillSet: yup
        .string()
        .required('Skill set is required')
});

const EmployeeEdit = (props: any) => {

    const formik = useFormik({
        initialValues: {
            firstName: props.employee.firstName,
            lastName: props.employee.lastName,
            email: props.employee.email,
            address: props.employee.address,
            phone: props.employee.phone,
            dob: props.employee.dob,
            firstDayInCompany: props.employee.firstDayInCompany,
            yearsOfExperience: props.employee.yearsOfExperience,
            managedBy: props.employee.managedBy,
            employeeType: props.employee.employeeType,
            skillSet: props.employee.skillSet,
            testDate: props.employee.testDate
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(formik.errors);
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (

        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div className="TextField Name">
                        <TextField
                            variant="outlined"
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}/>
                    </div>
                    <div className="TextField Name">
                        <TextField
                            variant="outlined"
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}/>
                    </div>

                    <div className="TextField">
                        <TextField
                            variant="outlined"
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}/>
                    </div>
                    <div className="TextField">
                        <TextField
                            variant="outlined"
                            id="phone"
                            name="phone"
                            label="Phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}/>
                    </div>
                    <div className="TextField">
                        <TextField
                            variant="outlined"
                            id="address"
                            name="address"
                            label="Address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}/>
                    </div>

                    <Divider variant="middle" style={{margin: "16px 0px"}}/>

                    <div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <div className="TextField">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="firstDayInCompany"
                                    label="First day in company"
                                    value={formik.values.firstDayInCompany}
                                    error={formik.touched.firstDayInCompany && Boolean(formik.errors.firstDayInCompany)}
                                    helperText={formik.touched.firstDayInCompany && formik.errors.firstDayInCompany}
                                    onChange={val => {
                                        formik.setFieldValue("firstDayInCompany", val);
                                    }}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </div>

                            <div className="TextField">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="dob"
                                    label="Birth date"
                                    value={formik.values.dob}
                                    error={formik.touched.dob && Boolean(formik.errors.dob)}
                                    helperText={formik.touched.dob && formik.errors.dob}
                                    onChange={val => {
                                        formik.setFieldValue("dob", val);
                                    }}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </div>
                        </MuiPickersUtilsProvider>

                        <div className="TextField">
                            <TextField
                                variant="outlined"
                                id="managedBy"
                                name="managedBy"
                                label="Managed by"
                                value={formik.values.managedBy}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.managedBy && Boolean(formik.errors.managedBy)}
                                helperText={formik.touched.managedBy && formik.errors.managedBy}/>
                        </div>
                        <div className="TextField">
                            <TextField
                                variant="outlined"
                                id="yearsOfExperience"
                                name="yearsOfExperience"
                                label="Years of experience"
                                value={formik.values.yearsOfExperience}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.yearsOfExperience && Boolean(formik.errors.yearsOfExperience)}
                                helperText={formik.touched.yearsOfExperience && formik.errors.yearsOfExperience}/>
                        </div>
                        <div className="TextField">
                            <TextField
                                variant="outlined"
                                id="employeeType"
                                name="employeeType"
                                label="Employee Type"
                                value={formik.values.employeeType}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.employeeType && Boolean(formik.errors.employeeType)}
                                helperText={formik.touched.employeeType && formik.errors.employeeType}/>
                        </div>
                        <div className="TextField">
                            <TextField
                                variant="outlined"
                                id="skillSet"
                                name="skillSet"
                                label="Employee Type"
                                value={formik.values.skillSet}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}error={formik.touched.employeeType && Boolean(formik.errors.employeeType)}
                                helperText={formik.touched.employeeType && formik.errors.employeeType}/>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default EmployeeEdit;

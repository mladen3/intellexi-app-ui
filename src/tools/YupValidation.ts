import * as yup from "yup";

export const employeeSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  yearsOfExperience: yup.number().required(),
  employeeType: yup.string().required(),
  dateOfBirth: yup.date()
});

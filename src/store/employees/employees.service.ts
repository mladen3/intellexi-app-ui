import AxiosClient from "../../axios-client";
import {AxiosResponse} from "axios";
import {IEmployee} from "../../model/common/IEmployee";

export const fetchEmployees = () => {
  return AxiosClient.noAuth.get(`/rest/v1/employee/all`)
      .then((response: AxiosResponse<IEmployee[]>) => {
        return response.data;
      }).catch(error => {
        throw error;
      })
};

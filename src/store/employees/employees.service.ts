import AxiosClient from "../../axios-client";
import {AxiosResponse} from "axios";
import {IEmployee} from "../../model/common/IEmployee";
import {IAuth} from "../../model/common/IAuth";

export const fetchEmployees = () => {
  return AxiosClient.noAuth.get(`/rest/v1/employee/findAll`)
      .then((response: AxiosResponse<IEmployee[]>) => {
        return response.data;
      }).catch(error => {
        throw error;
      })
};

export const deleteEmployee = (id: number) => {
  return AxiosClient.noAuth.delete(`/rest/v1/employee/${id}`)
      .then((response: AxiosResponse<null>) => {
        return response;
      }).catch(error => {
        throw error;
      })
};

export const createEmployee = (employee: IEmployee) => {
  return AxiosClient.noAuth.post(`/rest/v1/employee`, employee)
      .then((response: AxiosResponse<IAuth>) => {
        return response.data;
      }).catch(error => {
        throw error;
      })
};

export const updateEmployee = (employee: IEmployee) => {
  return AxiosClient.noAuth.put(`/rest/v1/employee`, employee)
      .then((response: AxiosResponse<null>) => {
        return response;
      }).catch(error => {
        throw error;
      })
};

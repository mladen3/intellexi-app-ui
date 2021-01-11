import AxiosClient from "../../axios-client";
import {IAuth} from "../../model/common/IAuth";
import {AxiosError} from "axios";

export const signIn = (auth: IAuth) => {
  return AxiosClient.noAuth.post(`/rest/v1/login`, auth)
      .then((response: any) => {
        return response.data;
      }).catch((error: AxiosError) => {
        throw error.response?.status;
      })
};

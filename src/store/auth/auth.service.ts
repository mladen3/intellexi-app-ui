import AxiosClient from "../../axios-client";
import {IAuth} from "../../model/common/IAuth";

export const signIn = (auth: IAuth) => {
  return AxiosClient.noAuth.post(`/rest/v1/login`, auth)
      .then((response: any) => {
        return response.data;
      }).catch(error => {
        throw error;
      })
};

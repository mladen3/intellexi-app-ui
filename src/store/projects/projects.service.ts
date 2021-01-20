import AxiosClient from "../../axios-client";
import {AxiosResponse} from "axios";
import {IProject} from "../../model/common/IProject";


export const fetchProjects = () => {
    return AxiosClient.noAuth.get(`/rest/v1/project/findAll`)
      .then((response: AxiosResponse<IProject[]>) => {
          return response.data;
      }).catch(error => {
          throw error;
      })
};

export const fetchProject = (projectId: number) => {
    return AxiosClient.noAuth.get(`/rest/v1/project/${projectId}`)
      .then((response: AxiosResponse<IProject>) => {
          return response;
      }).catch(error => {
          throw error;
      })
};

export const deleteProject =(projectId: number) => {
    return AxiosClient.noAuth.delete(`/rest/v1/project/${projectId}`)
      .then((response: AxiosResponse<null>) => {
          return response;
      }).catch(error => {
          throw error;
      })
};

export const createProject = (project: IProject) => {
    return AxiosClient.noAuth.post(`/rest/v1/project/`,project)
      .then((response: AxiosResponse<IProject>) => {
          return response;
      }).catch(error => {
          throw error;
      })
};

export const updateProject = (project: IProject) => {
    return AxiosClient.noAuth.put(`/rest/v1/project/`, project)
      .then((response: AxiosResponse<null>) => {
          return response;
      }).catch(error =>  {
          throw error;
      })
}

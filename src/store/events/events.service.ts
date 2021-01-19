import AxiosClient from "../../axios-client";
import {AxiosResponse} from "axios";
import {IEvent} from "../../model/common/IEvent";


export const fetchEvents = () => {
    return AxiosClient.noAuth.get(`/rest/v1/event/findAll`)
      .then((response: AxiosResponse<IEvent[]>) => {
          return response.data;
      }).catch(error => {
          throw error;
      })
};

export const deleteEvent = (eventId: number) => {
    return AxiosClient.noAuth.delete(`/rest/v1/event/${eventId}`)
      .then((response: AxiosResponse<null>) => {
          return response;
      }).catch(error => {
          throw error;
      })
};

export const createEvent = (event: IEvent) => {
    return AxiosClient.noAuth.post(`/rest/v1/event`,event)
      .then((response: AxiosResponse<IEvent>) => {
          return response;
      }).catch(error => {
          throw error;
      })
};

export const fetchEventById = (eventId: number) => {
    return AxiosClient.noAuth.get(`/rest/v1/event/${eventId}`)
      .then((response: AxiosResponse<IEvent>) => {
          return response;
      }).catch(error => {
          throw error;
      })
};

export const updateEvent = (event: IEvent) => {
    return AxiosClient.noAuth.put(`/rest/v1/event`, event)
      .then((response: AxiosResponse<null>) => {
          return response;
      }).catch(error => {
          throw error;
    })
};

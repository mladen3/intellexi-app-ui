import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {ApplicationSettings} from "./common/application-settings";
import Cookies from "universal-cookie/lib";
import {HR} from "./model/common/locale-settings";

const handleResponseError = (error: any) => {
  if (error?.response?.status === 401) {
    window.location.reload();
    return promiseReject(error);
  } else {
    return promiseReject(error);
  }
}

const promiseReject = (error: any) => Promise.reject(error);

class AxiosClientInner {

  private static dateRegex: RegExp = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;

  /**
   * Axios instance used for unauthorized requests
   * @type {AxiosInstance}
   */
  public noAuth: AxiosInstance = axios.create(this.getDefaultAuthInstanceConfig());

  private getDefaultAuthInstanceConfig() {
    return {
      headers: {
        post: {
          "Content-Type": "application/json"
        }
      },
      timeout: ApplicationSettings.HTTP_AJAX_TIMEOUT,
      transformResponse: [(data: string) => {
        return (data && data !== "") ? this.reviver(data) : data;
      }]
    }
  }

  private reviver(data: string): string | object | undefined {
    if (!data) {
      return undefined;
    }
    try {
      return JSON.parse(data, this.dateReviver);
    } catch (e) {
      return data;
    }
  }

  private dateReviver(key: any, value: any) {
    if (typeof value === "string" && value !== "" && AxiosClientInner.dateRegex.exec(value)) {
      return new Date(value);
    }
    return value;
  }
}

const AxiosClient = new AxiosClientInner();
AxiosClient.noAuth.interceptors.request.use(commonInterceptor, promiseReject);
AxiosClient.noAuth.interceptors.response.use(response => response, handleResponseError);


function commonInterceptor(config: AxiosRequestConfig) {
  const localeSettings = HR;
  config.headers["common"] = {
    ...config.headers["common"],
    ...{[ApplicationSettings.ACCEPT_LANGUAGE_HEADER]: localeSettings.lang}
  };

  const csrf = readCsrfTokenValueFromCookie();
  if (csrf) {
    config.headers["common"] = {
      ...config.headers["common"],
      ...{[ApplicationSettings.CSRF_CUSTOM_HTTP_HEADER_NAME]: csrf}
    };
  }
  return config;
}

function readCsrfTokenValueFromCookie(): string {
  const cookies = new Cookies();
  return cookies.get(ApplicationSettings.CSRF_HTTP_COOKIE_NAME);
}

export default AxiosClient;

import Axios, { AxiosResponse } from 'axios';

const BASE_URL = '/api/v1';

const axios = Axios.create({
  withCredentials: true,
});

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export const apiFetcher = {
  get(endpoint: string, data?: any) {
    return ajax(endpoint, Method.GET, data);
  },
  post(endpoint: string, data?: any) {
    return ajax(endpoint, Method.POST, data);
  },
  put(endpoint: string, data?: any) {
    return ajax(endpoint, Method.PUT, data);
  },
  delete(endpoint: string, data?: any) {
    return ajax(endpoint, Method.DELETE, data);
  },
  patch(endpoint: string, data?: any) {
    return ajax(endpoint, Method.PATCH, data);
  },
};

async function ajax(endpoint: string, method: Method, data?: AxiosResponse) {
  const res = await axios({
    url: `${BASE_URL}${endpoint}`,
    method,
    data,
  });
  return res.data;
}

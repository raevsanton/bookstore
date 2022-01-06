import Axios from 'axios';

const BASE_URL = '/api/v1';

const axios = Axios.create({
  withCredentials: true,
});

enum Method {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const apiFetcher = {
  get(endpoint: string, body?, params?) {
    return makeRequest(endpoint, Method.GET, body, params);
  },
  post(endpoint: string, body?, params?) {
    return makeRequest(endpoint, Method.POST, body, params);
  },
  put(endpoint: string, body?, params?) {
    return makeRequest(endpoint, Method.PUT, body, params);
  },
  delete(endpoint: string, body?, params?) {
    return makeRequest(endpoint, Method.DELETE, body, params);
  },
  patch(endpoint: string, body?, params?) {
    return makeRequest(endpoint, Method.PATCH, body, params);
  },
};

async function makeRequest(endpoint: string, method: Method, data?, params?) {
  const res = await axios({
    url: `${BASE_URL}${endpoint}`,
    method,
    data,
    params,
  });
  return res.data;
}

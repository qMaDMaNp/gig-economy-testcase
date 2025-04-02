import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/api',
  timeout: 10000,
  withCredentials: false,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
});

// Response interceptor to handle errors
api.interceptors.response.use(response => response, async error => {
  const { response } = error;

  if (response) {
    const { status } = response;

    if (status === 401) {
      // Unauthorized
    }
    else if (status === 403) {
      // Forbidden access
    }
    else if (status === 404) {
      // Resource not found
    }
    else if (status >= 500) {
      // Server error
    }
  }

  return Promise.reject(error);
}
);

const get = (url, params = {}) => api.get(url, { params });
const post = (url, data = {}) => api.post(url, data);
const put = (url, data = {}) => api.put(url, data);
const del = (url, data = {}) => api.delete(url, { data });

export { get, post, put, del };
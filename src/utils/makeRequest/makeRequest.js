import axios from 'axios';

const authHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const makeAuthRequest = async (apiEndPoint, dynamicConfig) => {
  const requestDetails = {
    baseURL: 'http://localhost:8000',
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...dynamicConfig,
  };
  const { data } = await axios(requestDetails);
  return data;
};

const makeRequest = async (apiEndPoint, dynamicConfig, token) => {
  const requestDetails = {
    baseURL: 'http://localhost:8000',
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...dynamicConfig,
    headers: {
      authorization: token,
    },
  };
  const { data } = await axios(requestDetails);
  return data;
};

export { makeAuthRequest, makeRequest, authHeader };

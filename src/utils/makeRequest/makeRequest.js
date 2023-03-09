import axios from 'axios';
import { AUTH_URL, BACKEND_URL } from '../../constant/apiEndPoints';
import { ERROR_ROUTE } from '../../constant/routes';

const makeAuthRequest = async (apiEndPoint, navigate, dynamicConfig) => {
  try {
    const requestDetails = {
      baseURL: AUTH_URL,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      ...dynamicConfig,
    };
    const { data } = await axios(requestDetails);
    return data;
  } catch (e) {
    const errorStatus = e.response?.status;
    if (errorStatus) {
      navigate(`${ERROR_ROUTE}/${errorStatus}`);
    } else {
      navigate(ERROR_ROUTE);
    }
    return null;
  }
};

const makeRequest = async (
  apiEndPoint,
  navigate,
  dynamicConfig = {},
  token
) => {
  try {
    const requestDetails = {
      baseURL: BACKEND_URL,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      ...dynamicConfig,
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios(requestDetails);
    return data;
  } catch (e) {
    const errorStatus = e.response?.status;
    if (errorStatus) {
      navigate(`${ERROR_ROUTE}/${errorStatus}`);
    } else {
      navigate(ERROR_ROUTE);
    }
    return null;
  }
};

export { makeAuthRequest, makeRequest };

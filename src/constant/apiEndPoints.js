export const BACKEND_URL = 'http://localhost:8080';
export const AUTH_URL = 'http://localhost:8000';

export const LOGIN_URL = {
  url: '/auth/login',
  method: 'POST',
};

export const REGISTER_URL = {
  url: '/auth/register',
  method: 'POST',
};

export const VALIDATE_TOKEN_URL = {
  url: '/auth/validate',
  method: 'POST',
};

export const GET_ALL_COLLECTIONS_URL = {
  url: '/api/content-form/',
  method: 'GET',
};

export const CREATE_FORM_URL = {
  url: '/api/content-form/',
  method: 'POST',
};

export const ADD_FORM_FIELD_URL = (id) => ({
  url: `/api/content-form/${id}`,
  method: 'PUT',
});

export const DELETE_FORM_FIELD_URL = (id) => ({
  url: `/api/content-form/${id}`,
  method: 'DELETE',
});

export const EDIT_FORM_FIELD_URL = (formId, fieldId) => ({
  url: `/api/content-form/${formId}/${fieldId}`,
  method: 'PUT',
});

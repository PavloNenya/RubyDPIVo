import { client } from "../utils/fetchClient";

export const register = (data) => {
  return client.post(`/auth/register`, data);
};

export const login = (data) => {
  return client.post(`/auth/login`, data);
};

export const logout = () => {
  return client.post(`/auth/logout`);
};

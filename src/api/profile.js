import { client } from "../utils/fetchClient";

export const getOldProfile = () => {
  return client.get(`/users/profiles/my`);
};

export const updateProfile = (id, dataToUpdate) => {
  return client.put(`/users/profiles/${id}`, dataToUpdate);
};

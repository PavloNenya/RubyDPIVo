import { client } from "../utils/fetchClient";

export const getGenders = () => {
  return client.get(`/genders`);
};

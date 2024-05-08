import { client } from "../utils/fetchClient";

export const getSizes = () => {
  return client.get(`/sizes`);
};

import { client } from "../utils/fetchClient";

export const getProducts = () => {
  return client.get(`/products/instances`);
};

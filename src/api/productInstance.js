import { client } from "../utils/fetchClient";

export const getProductInstance = (id) => {
  return client.get(`/products/instances/${id}`);
};

import { client } from "../utils/fetchClient";

export const getProductInstancesAndSizes = (id) => {
  return client.get(`/products/${id}/instances`);
};

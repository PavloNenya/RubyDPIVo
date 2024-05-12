import { client } from "../utils/fetchClient";

export const getProductById = (id) => {
  return client.get(`/products/${id}`);
};

import { client } from "../utils/fetchClient";

export const getProducts = () => {
  return client.get(`/products`);
};

export const getProductsByPage = (page, data) => {
  return client.post(`/products/filter?page=${page}`, data);
};

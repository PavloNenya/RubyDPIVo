import { client } from "../utils/fetchClient";

export const getCategories = () => {
  return client.get(`/categories`);
};

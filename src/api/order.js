import { client } from "../utils/fetchClient";

export const addOrder = (order) => {
  return client.post(`/orders`, order);
};

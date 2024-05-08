import { client } from "../utils/fetchClient";

export const getProducers = () => {
  return client.get(`/producers`);
};

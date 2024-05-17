import { client } from "../utils/fetchClient";

export const getFavorite = () => {
  return client.get(`/users/wishlist`);
};

export const addFavorite = (product) => {
  return client.post(`/users/wishlist/${product.id}`, product);
};

export const deleteFavorite = (product) => {
  return client.delete(`/users/wishlist/${product.id}`);
};

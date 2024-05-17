import { createContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { getProducts } from "../api/products";

export const AppContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedSize, setSelectedSize] = useState({});
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setProducts([]);
    setErrorMessage(null);

    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch(() => setErrorMessage("Error retrieving products"))
      .finally(() => setIsLoading(false));
  }, [setErrorMessage, setProducts]);

  const value = useMemo(
    () => ({
      products,
      setProducts,
      errorMessage,
      setErrorMessage,
      selectedProduct,
      setSelectedProduct,
      selectedSize,
      setSelectedSize,
      isLoading,
      setIsLoading,
      likedProducts,
      setLikedProducts,
    }),
    [
      errorMessage,
      isLoading,
      likedProducts,
      products,
      selectedProduct,
      selectedSize,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

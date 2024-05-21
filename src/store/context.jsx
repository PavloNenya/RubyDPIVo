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
  const [isAuth, setIsAuth] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [user, setUser] = useState({});

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

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) setIsAuth(true);
    console.log("Token", token);
  }, []);

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
      isAuth,
      setIsAuth,
      buttonActive,
      setButtonActive,
      user,
      setUser,
    }),
    [
      buttonActive,
      errorMessage,
      isAuth,
      isLoading,
      likedProducts,
      products,
      selectedProduct,
      selectedSize,
      user,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
